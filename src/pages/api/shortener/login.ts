import type { APIRoute } from "astro";
import {
  createSessionToken,
  setSessionCookie,
  verifyPassword,
} from "../../../lib/shortener";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const password = String(form.get("password") ?? "");

  if (!verifyPassword(password)) {
    return redirect("/shortener?error=1", 303);
  }

  setSessionCookie(cookies, createSessionToken());
  return redirect("/shortener", 303);
};
