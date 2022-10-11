import type { NextPage } from 'next'
import Intro from '@components/Intro'
import Wrapper from '@components/Wrapper'
import { Blogs } from '@components/Content'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Intro />
      <Blogs />
    </Wrapper>
  )
}

export default Home
