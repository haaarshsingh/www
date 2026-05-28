import type { APIRoute } from "astro";
import { clearSessionCookie } from "../../../lib/shortener";

export const prerender = false;

export const POST: APIRoute = async ({ cookies, redirect }) => {
  clearSessionCookie(cookies);
  return redirect("/shortener", 303);
};
