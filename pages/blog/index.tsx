import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Wrapper from '@components/Wrapper'
import Blog from '@components/Blog/Blog'
import Newsletter from '@components/Newsletter'

const BlogHome: NextPage = () => {
  return (
    <Wrapper>
      <Blog />
      <Newsletter />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
})

export default BlogHome
