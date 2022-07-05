import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps, NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import { useTranslation } from 'next-i18next'
import Header from '@components/Header'
import Shortener from '@components/Shortener'

const Uses: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Wrapper title='Shortener' description='Shorten your links with my domain'>
      <Shortener />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  }
}

export default Uses
