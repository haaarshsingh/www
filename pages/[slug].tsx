import { GetServerSideProps, NextPage } from 'next'
import prisma from '@lib/prisma'
import NotFound from '@components/NotFound'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Wrapper from '@components/Wrapper'
import Newsletter from '@components/Newsletter'

const LinkRedirect: NextPage<{ valid: boolean }> = ({ valid }) => {
  return (
    <Wrapper
      title={valid === false ? 'Another Boring 404' : 'Redirect'}
      description={
        valid === false
          ? "There's nothing here!"
          : 'This page redirects you to... well, click and find out!'
      }
    >
      <NotFound />
      <Newsletter />
    </Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const link = await prisma.link.findUnique({
    where: { slug: context.params?.slug?.toString() },
  })

  if (link) return { redirect: { destination: link.url, permanent: false } }

  return {
    props: {
      valid: false,
      ...(await serverSideTranslations(context.locale!, ['common'])),
    },
  }
}

export default LinkRedirect
