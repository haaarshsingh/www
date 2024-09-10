import type { APIRoute } from "astro";

export const prerender = false;

const locate = async (ip: string) => {
  try {
    const response = await fetch(`https://ipapi.co/128.210.106.74/json/`);
    const data = await response.json();

    return `${data.city}, ${data.region_code}`;
  } catch (error) {
    return console.error("Error fetching IP details:", error);
  }
};

const setLocation = async (location: string) => {
  try {
    const response = await fetch(
      `${process.env.UPSTASH_REDIS_REST_URL}/set/visitor/${encodeURI(location)}`,
      {
        headers: {
          Authorization: `Basic ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        },
      },
    );

    return await response.status;
  } catch (error) {
    return console.error("Error saving to Upstash:", error);
  }
};

export const GET: APIRoute = async (props) => {
  const location = await locate(props.clientAddress);
  const status = await setLocation(location as string);

  return new Response(
    JSON.stringify({
      status: status,
      headers: {
        "Content-Type": "application/json",
      },
    }),
  );
};
