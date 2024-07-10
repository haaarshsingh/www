import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");

  const font = fetch(
    new URL("../fonts/inter-semibold.woff2", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-start justify-end bg-neutral-900">
        <div tw="text-neutral-50 font-semibold text-3xl mb-10 ml-10">
          Harsh Singh
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
};
