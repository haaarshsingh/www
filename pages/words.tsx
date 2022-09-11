import type { GetStaticProps, NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import Header from '@components/Header'
import Words from '@components/Words'
import { allInfos } from '@layer/generated'

const WordsPage: NextPage<{ uses: { body: { code: string } } }> = ({
  uses,
}) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const privacy = allInfos.find(
    (page: { slug: string }) => page.slug === 'words'
  )!

  return {
    props: { privacy },
  }
}

export default WordsPage
