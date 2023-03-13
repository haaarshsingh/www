import type { Metadata, NextPage } from 'next'
import { metadata as defaultMetadata } from '@app/layout'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import Balancer from 'react-wrap-balancer'

type Params = { slug: string }
type GenerateMetadata = (params: Params) => Metadata

export const generateStaticParams = () =>
  allPosts.map((post) => ({
    slug: post.slug,
  }))

export const generateMetadata: GenerateMetadata = (params) => {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) return defaultMetadata

  const { title, published: publishedTime, description, slug } = post
  const image = `https://leerob.io/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://leerob.io/blog/${slug}`,
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

const Page: NextPage<Params> = ({ slug }) => {
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) notFound()

  return (
    <section>
      <h1>
        <Balancer>{post.title}</Balancer>
      </h1>
      <div>
        <div>{post.published}</div>
        <div />
      </div>
      <Mdx code={post.body.code} />
    </section>
  )
}

export default Page
