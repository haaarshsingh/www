import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps, NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import { useTranslation } from 'next-i18next'
import Newsletter from '@components/Newsletter'
import Link from 'next/link'
import NotFoundComponent from '@components/NotFound'

const NotFound: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Wrapper title='Another Boring 404' description="There's nothing here!">
      <NotFoundComponent />
      <Newsletter />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale!, ['common'])) },
  }
}

export default NotFound
