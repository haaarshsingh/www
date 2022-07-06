import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import { useTranslation } from 'next-i18next'
import Shortener from '@components/Shortener'

const Uses: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Wrapper title='Shortener' description='Shorten your links with my domain'>
      <Shortener />
    </Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const links = await fetch('/api/links')
  console.log(links)

  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      links: links,
    },
  }
}

export default Uses
