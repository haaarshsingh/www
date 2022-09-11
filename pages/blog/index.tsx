import type { NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import Blog from '@components/Blog/Blog'

const BlogHome: NextPage = () => {
  return (
    <Wrapper
      title='Harsh & Thoughts'
      description="Harsh Singh's personal blog with posts and tutorials about his opinions and thoughts on just about everything related to technology."
    >
      <Blog />
    </Wrapper>
  )
}

export default BlogHome
