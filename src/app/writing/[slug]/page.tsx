import '@css/syntax.css'
import type { Metadata, NextPage } from 'next'
import { metadata as defaultMetadata } from '@app/layout'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import Post from '@components/Post'
import localFont from 'next/font/local'
allPosts.sort((a, b) => (a.published < b.published ? 1 : -1))

const fira = localFont({
  src: '../../fonts/fira.woff2',
  weight: '400',
  variable: '--font-mono',
  display: 'swap',
})

export type TOC = { toc: { value: string; url: string; depth: number }[] }
type Params = { params: { slug: string } }
type GenerateMetadata = (params: any) => Metadata

export const generateStaticParams = () =>
  allPosts.map((post) => ({ slug: post.slug.substring(9) }))

export const generateMetadata: GenerateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post.slug.substring(9) === params.slug)
  if (!post) return defaultMetadata

  const { title, published: publishedTime, description, slug } = post
  const image = `https://api.hxrsh.in/api/image?title=${encodeURI(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://harshsingh.xyz/writing/${slug}`,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

const Page: NextPage<Params> = ({ params }) => {
  const post = allPosts.find((post) => post.slug.substring(9) === params.slug)
  if (!post) notFound()

  return (
    <Post
      className={fira.variable}
      index={allPosts.findIndex(
        (post) => post.slug.substring(9) === params.slug
      )}
      {...post}
    />
  )
}

export default Page
