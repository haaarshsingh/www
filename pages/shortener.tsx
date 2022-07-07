import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import { useTranslation } from 'next-i18next'
import Shortener from '@components/Shortener'
import { Link } from '@prisma/client'
import { getSession } from 'next-auth/react'
import { CustomSession } from './api/auth/[...nextauth]'

const Uses: NextPage<{ links: Link[] }> = ({ links }) => {
  return (
    <Wrapper title='Shortener' description='Shorten your links with my domain'>
      <Shortener links={links} />
    </Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session: CustomSession | null = await getSession(ctx)

  if (typeof session?.user?.id === 'string') {
    const links = await prisma?.link.findMany({
      where: { userId: session?.user.id },
    })

    return {
      props: {
        links: links,
        ...(await serverSideTranslations(ctx.locale!, ['common'])),
      },
    }
  }

  console.log(session)

  return {
    props: {
      links: null,
      ...(await serverSideTranslations(ctx.locale!, ['common'])),
    },
  }
}

export default Uses
