import type { APIRoute } from "astro";

export const prerender = false;

const SLUG_REGEX = /^[a-z0-9-]{1,64}$/;

const restUrl = () =>
  process.env.UPSTASH_REDIS_REST_URL || import.meta.env.UPSTASH_REDIS_REST_URL;
const restToken = () =>
  process.env.UPSTASH_REDIS_REST_TOKEN ||
  import.meta.env.UPSTASH_REDIS_REST_TOKEN;

const increment = async (slug: string): Promise<number | null> => {
  try {
    const response = await fetch(`${restUrl()}/incr/views:${slug}`, {
      headers: { Authorization: `Bearer ${restToken()}` },
    });
    const data = (await response.json()) as { result?: unknown };
    return typeof data.result === "number" ? data.result : null;
  } catch (error) {
    console.error("Error incrementing views:", error);
    return null;
  }
};

export const GET: APIRoute = async ({ url }) => {
  const slug = url.searchParams.get("slug");
  if (!slug || !SLUG_REGEX.test(slug)) {
    return new Response(JSON.stringify({ error: "invalid slug" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const count = await increment(slug);
  if (count === null) {
    return new Response(JSON.stringify({ error: "upstream error" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ count }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
};
