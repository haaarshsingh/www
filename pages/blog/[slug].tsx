import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Wrapper from '@components/Wrapper'
import { allBlogs, Blog } from '@layer/generated'
import Newsletter from '@components/Newsletter'
import Post from '@components/Blog/Post'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from 'components/MDX'
import { format } from 'date-fns'

const BlogPost: NextPage<{ post: Blog }> = ({ post }) => {
  const Component = useMDXComponent(post.body.code)

  return (
    <Wrapper
      title={post.title}
      image={`/api/image?title=${encodeURI(post.title)}&description=${encodeURI(
        post.description
      )}&readingTime=${Math.round(post.readingTime.minutes)}&words=${
        post.readingTime.words
      }&date=${encodeURI(
        format(Date.parse(post.published), 'dd MMMM, yyyy')
      )}&`}
    >
      <Post blog={post} />
      <div className='blog'>
        <Component components={{ ...components }} />
      </div>
      <Newsletter />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    post: allBlogs.find((post) => post.slug === context.params?.slug),
    params: context.params,
    ...(await serverSideTranslations(context.locale!, ['common'])),
  },
})

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export default BlogPost
