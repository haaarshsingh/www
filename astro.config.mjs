import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/static'
import remarkGfm from 'remark-gfm'
import remarkSectionize from 'remark-sectionize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import m2dx from 'astro-m2dx'
import { remarkReadingTime } from './src/lib/remarkReadingTime.mjs'

/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  exportComponents: true,
  frontmatter: true,
}

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://harshsingh.xyz',
  integrations: [mdx(), react(), sitemap()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [
      remarkGfm,
      [m2dx, m2dxOptions],
      remarkSectionize,
      remarkReadingTime,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
    extendDefaultPlugins: true,
  },
})
