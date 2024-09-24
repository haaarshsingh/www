import type { APIRoute } from "astro";

export const prerender = false;

const locate = async (ip: string) => {
  try {
    const location = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await location.json();

    const response = await fetch(
      `${import.meta.env.UPSTASH_REDIS_REST_URL}/set/visitor/${encodeURI(`${data.city}, ${data.countryCode === "US" ? data.region : data.countryCode}`)}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.UPSTASH_REDIS_REST_TOKEN}`,
        },
      },
    );

    return response.status;
  } catch (error) {
    return console.error("Error fetching IP details:", error);
  }
};

export const GET: APIRoute = async (props) => {
  const status = await locate(props.clientAddress);

  return new Response(JSON.stringify({ status: status }));
};
