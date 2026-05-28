import type { APIRoute } from "astro";
import {
  createShortLink,
  generateSlug,
  isAuthenticated,
  isReservedSlug,
  normalizeLongUrl,
  SLUG_REGEX,
  slugExists,
} from "../../../lib/shortener";

export const prerender = false;

const fail = (
  redirect: (path: string, status?: 301 | 302 | 303 | 307 | 308) => Response,
  message: string,
): Response =>
  redirect(`/shortener?createError=${encodeURIComponent(message)}`, 303);

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  if (!isAuthenticated(cookies)) return redirect("/shortener", 303);

  const form = await request.formData();
  const longUrl = normalizeLongUrl(String(form.get("url") ?? ""));
  if (!longUrl) return fail(redirect, "invalid URL");

  const customSlug = String(form.get("slug") ?? "").trim();
  let slug: string;

  if (customSlug) {
    if (!SLUG_REGEX.test(customSlug))
      return fail(
        redirect,
        "slug must be 3-40 chars (letters, numbers, _ or -)",
      );
    if (isReservedSlug(customSlug))
      return fail(redirect, "that slug is reserved");
    if (await slugExists(customSlug))
      return fail(redirect, "slug already taken");
    slug = customSlug;
  } else {
    // Best-effort uniqueness via a few retries; collisions on a random
    // 7-char base62 slug are astronomically unlikely at this scale.
    let attempt = 0;
    do {
      slug = generateSlug();
      attempt++;
    } while ((await slugExists(slug)) && attempt < 5);
    if (await slugExists(slug))
      return fail(redirect, "could not generate unique slug");
  }

  try {
    await createShortLink(slug, longUrl);
  } catch (err) {
    const message = err instanceof Error ? err.message : "redis error";
    return fail(redirect, message);
  }

  return redirect(`/shortener?created=${encodeURIComponent(slug)}`, 303);
};
