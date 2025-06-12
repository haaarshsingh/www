import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://harshsingh.me",
  integrations: [tailwind(), sitemap()],
  output: "static",
  adapter: vercel(),
});
