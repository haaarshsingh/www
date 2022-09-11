import type { NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import Header from '@components/Header'
import Words from '@components/Words'

const Uses: NextPage<{ uses: { body: { code: string } } }> = ({ uses }) => {
  return (
    <Wrapper
      title='Words'
      description='A small collection of random English words that I really like'
    >
      <Header head='' bio='' />
      <Words />
    </Wrapper>
  )
}

export default Uses
