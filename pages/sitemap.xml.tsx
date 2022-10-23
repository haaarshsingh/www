import { GetServerSideProps } from 'next'
import { allBlogs } from '@layer/generated'

const createSitemap = (
  slugs: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://harshsingh.xyz/${slug}`}</loc>
                </url>
            `
          })
          .join('')}
    </urlset>
`
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const allPages = [
    ...allBlogs.map((blog) => `blog/${blog.slug}`),
    ...[
      '',
      'abt',
      'blog',
      'ama',
      'stats',
      'uses',
      'photos',
      'words',
      'shortener',
    ],
  ]

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )
  res.write(createSitemap(allPages))
  res.end()

  return {
    props: {},
  }
}

const Sitemap = () => {
  return null
}

export default Sitemap
