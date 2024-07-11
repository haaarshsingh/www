import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const font = fetch(
    new URL("../fonts/inter/og/medium.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex items-end text-2xl justify-start"
        style={{
          backgroundImage: "url(https://harshsingh.xyz/og-bg.png)",
        }}
      >
        <div tw="ml-[185px] mb-[85px] flex flex-col">
          <div
            tw="tracking-tight text-3xl z-10 text-neutral-50"
            style={{ fontFamily: "Inter Medium" }}
          >
            {title}
          </div>
          <div
            tw="tracking-tight z-10 text-lg text-neutral-50"
            style={{ fontFamily: "Inter Medium" }}
          >
            {description}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter Medium",
          data: await font,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
};
