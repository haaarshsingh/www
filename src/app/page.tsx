import Photos from '@components/Home/Photos'
import { Wrapper } from '@components/Layout'
import Home from '@components/Home'
import { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <Wrapper>
      <Home />
      <Photos />
    </Wrapper>
  )
}

export default Page
