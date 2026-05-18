import rss from "@astrojs/rss";
import type { APIContext } from "astro";

type PostFrontmatter = {
  title: string;
  description: string;
  date?: string;
};

type PostModule = {
  frontmatter: PostFrontmatter;
  url?: string;
  file?: string;
};

export const GET = async (context: APIContext) => {
  const modules = import.meta.glob<PostModule>("./**/*.mdx", { eager: true });

  const items = Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path
        .replace(/^\.\//, "/")
        .replace(/\/index\.mdx$/, "/")
        .replace(/\.mdx$/, "");
      const parsed = mod.frontmatter.date
        ? new Date(mod.frontmatter.date)
        : null;
      return {
        title: mod.frontmatter.title,
        description: mod.frontmatter.description,
        link: slug,
        pubDate:
          parsed && !isNaN(parsed.getTime()) ? parsed : new Date(0),
      };
    })
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: "Harsh Singh",
    description:
      "Writing on systems, design, and tooling by Harsh Singh, a software engineer based in Austin, Texas.",
    site: context.site ?? "https://www.harshsingh.me",
    items,
    customData: "<language>en-us</language>",
  });
};
