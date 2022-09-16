import type { GetStaticProps, NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import Blog from '@components/Blog/Blog'
import { allFollowers, allPosts } from '@lib/dev'

const BlogHome: NextPage<{ followers: string; views: string }> = ({
  followers,
  views,
}) => {
  return (
    <Wrapper
      title='Blog'
      description={`Writing software, and then teaching others. Thoughts and tutorials on everything from design to databases. Read by ${views} people till date. Join ${followers} others and follow my blog on Dev.`}
    >
      <Blog followers={followers} views={views} />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const followers = await allFollowers('2000')
  const posts: {
    page_views_count: number
    public_reactions_count: number
    comments_count: number
  }[] = await allPosts('1000')

  let views = 0
  posts.forEach((post) => (views += post.page_views_count))

  return { props: { followers: followers, views: views } }
}

export default BlogHome
