import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://harshsingh.me",
  integrations: [tailwind(), sitemap(), react(), mdx()],
  output: "hybrid",
  adapter: vercel(),
});
