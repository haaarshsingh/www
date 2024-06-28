import createMDX from '@next/mdx'
import sectionize from 'remark-sectionize'
import toc from 'remark-toc'
import autolinkHeadings from 'rehype-autolink-headings'
import minify from 'rehype-preset-minify'
import slug from 'rehype-slug'
import gfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const config = { pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'] }

const withMDX = createMDX({
  options: {
    remarkPlugins: [sectionize, toc, gfm],
    rehypePlugins: [autolinkHeadings, minify, slug],
  },
})

export default withMDX(config)
