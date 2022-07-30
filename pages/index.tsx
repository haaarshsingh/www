import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Intro from '@components/Intro'
import Wrapper from '@components/Wrapper'
import { Blogs } from '@components/Content'
import Newsletter from '@components/Newsletter'
import { useState } from 'react'

const Home: NextPage = () => {
  const [open, setOpen] = useState(0)

  return (
    <Wrapper menu={open} setMenu={setOpen}>
      <Intro setOpen={setOpen} />
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
