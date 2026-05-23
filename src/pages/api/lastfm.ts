import type { APIRoute } from "astro";

export const prerender = false;

const LASTFM_API_URL = "https://ws.audioscrobbler.com/2.0/";

const env = (key: string) =>
  import.meta.env[key] || process.env[key] || "";

export const GET: APIRoute = async () => {
  try {
    const params = new URLSearchParams({
      method: "user.getrecenttracks",
      user: env("LASTFM_USERNAME"),
      api_key: env("LASTFM_API_KEY"),
      format: "json",
      limit: "1",
    });

    const response = await fetch(`${LASTFM_API_URL}?${params}`);
    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Last.fm ${response.status}: ${body}`);
    }

    const data = await response.json();
    const track = data.recenttracks?.track?.[0];

    if (!track) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        headers: {
          "Cache-Control": "public, s-maxage=120, stale-while-revalidate=60",
        },
      });
    }

    const isPlaying = track["@attr"]?.nowplaying === "true";
    const albumArt =
      track.image?.find(
        (i: { size: string; "#text": string }) => i.size === "extralarge",
      )?.["#text"] ||
      track.image?.find(
        (i: { size: string; "#text": string }) => i.size === "large",
      )?.["#text"] ||
      "";

    return new Response(
      JSON.stringify({
        isPlaying,
        title: track.name,
        artist: track.artist["#text"],
        albumArt,
        url: track.url,
      }),
      {
        headers: {
          "Cache-Control": isPlaying
            ? "public, s-maxage=60, stale-while-revalidate=30"
            : "public, s-maxage=120, stale-while-revalidate=60",
        },
      },
    );
  } catch (error) {
    console.error("Last.fm API error:", error);
    return new Response(JSON.stringify({ error: true }), { status: 500 });
  }
};
