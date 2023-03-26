import '@css/syntax.css'
import type { Metadata, NextPage } from 'next'
import { metadata as defaultMetadata } from '@app/layout'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import Post from '@components/Post'
allPosts.sort((a, b) => (a.published < b.published ? 1 : -1))

export type TOC = { toc: { value: string; url: string; depth: number }[] }
type Params = { params: { slug: string } }
type GenerateMetadata = (params: Params) => Metadata

export const generateStaticParams = () =>
  allPosts.map((post) => ({ slug: post.slug.substring(9) }))

export const generateMetadata: GenerateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params.slug)
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
      url: `https://harshsingh.xyz/blog/${slug}`,
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
      {...post}
      index={allPosts.findIndex(
        (post) => post.slug.substring(9) === params.slug
      )}
    />
  )
}

export default Page
