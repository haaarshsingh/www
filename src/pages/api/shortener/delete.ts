import type { APIRoute } from "astro";
import {
  deleteShortLink,
  isAuthenticated,
} from "../../../lib/shortener";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  if (!isAuthenticated(cookies)) return redirect("/shortener", 303);

  const form = await request.formData();
  const slug = String(form.get("slug") ?? "").trim();
  if (!slug) {
    return redirect(
      `/shortener?createError=${encodeURIComponent("missing slug")}`,
      303,
    );
  }

  try {
    await deleteShortLink(slug);
  } catch (err) {
    const message = err instanceof Error ? err.message : "redis error";
    return redirect(
      `/shortener?createError=${encodeURIComponent(message)}`,
      303,
    );
  }

  return redirect(
    `/shortener?deleted=${encodeURIComponent(slug)}`,
    303,
  );
};
