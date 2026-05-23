import type { APIRoute } from "astro";
import { ImageResponse } from "@vercel/og";

export const prerender = false;

async function loadGoogleFont(font: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(url).then((res) => res.text());
  const match = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/);
  if (!match || !match[1]) throw new Error("Font not found");
  const fontUrl = match[1];
  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Harsh Singh";

  const interSemibold = await loadGoogleFont("Inter", 600, title);

  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundImage: "url(https://www.harshsingh.me/og-blog-template.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingLeft: "50px",
          paddingBottom: "45px",
          justifyContent: "flex-end",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                fontSize: 64,
                fontFamily: "Inter",
                color: "#000000",
                maxWidth: "1200px",
                letterSpacing: "-0.04em",
              },
              children: title,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interSemibold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
};
