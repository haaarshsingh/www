import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Intro from '@components/Intro'
import Wrapper from '@components/Wrapper'
import { Blogs } from '@components/Content'
import Newsletter from '@components/Newsletter'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Intro />
      <Blogs />
      <Newsletter />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
})

export default Home
