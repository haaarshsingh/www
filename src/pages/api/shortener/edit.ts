import type { APIRoute } from "astro";
import {
  isAuthenticated,
  isReservedSlug,
  isValidSlugShape,
  normalizeLongUrl,
  slugExists,
  updateShortLink,
} from "../../../lib/shortener";

export const prerender = false;

const fail = (
  redirect: (path: string, status?: 301 | 302 | 303 | 307 | 308) => Response,
  slug: string,
  message: string,
): Response =>
  redirect(
    `/shortener?edit=${encodeURIComponent(slug)}&editError=${encodeURIComponent(message)}`,
    303,
  );

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  if (!isAuthenticated(cookies)) return redirect("/shortener", 303);

  const form = await request.formData();
  const slug = String(form.get("slug") ?? "").trim();
  if (!slug) return redirect("/shortener", 303);

  const rawNewSlug = String(form.get("new_slug") ?? "").trim();
  const rawUrl = String(form.get("url") ?? "").trim();

  const newUrl = rawUrl ? normalizeLongUrl(rawUrl) : null;
  if (rawUrl && !newUrl) return fail(redirect, slug, "invalid URL");

  let newSlug: string | undefined;
  if (rawNewSlug && rawNewSlug !== slug) {
    if (!isValidSlugShape(rawNewSlug))
      return fail(redirect, slug, "slug cannot contain '/' or be empty");
    if (isReservedSlug(rawNewSlug))
      return fail(redirect, slug, "that slug is reserved");
    if (await slugExists(rawNewSlug))
      return fail(redirect, slug, "slug already taken");
    newSlug = rawNewSlug;
  }

  if (!newSlug && !newUrl) return redirect("/shortener", 303);

  const opts: { newSlug?: string; newUrl?: string } = {};
  if (newSlug) opts.newSlug = newSlug;
  if (newUrl) opts.newUrl = newUrl;

  try {
    await updateShortLink(slug, opts);
  } catch (err) {
    const message = err instanceof Error ? err.message : "redis error";
    return fail(redirect, slug, message);
  }

  return redirect(
    `/shortener?updated=${encodeURIComponent(newSlug ?? slug)}`,
    303,
  );
};
