import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;

  const title = searchParams.get("title");

  const font = fetch(
    new URL("../fonts/inter/og/semibold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: "url(https://harshsingh.xyz/og-bg.png)",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://harshsingh.xyz/og-headshot.png"
          width={48}
          height={48}
        />
        <div
          style={{
            fontFamily: "Inter",
            fontSize: 24,
            color: "black",
            letterSpacing: -0.5,
            marginLeft: 12,
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: await font,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
};
