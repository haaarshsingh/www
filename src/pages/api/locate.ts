import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = (props) => {
  console.log(props.clientAddress);

  return new Response(
    JSON.stringify({
      ip: props.clientAddress,
    }),
  );
};
