import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import { useTranslation } from 'next-i18next'
import Header from '@components/Header'
import Photos from '@components/Photos'
import { promises as fs } from 'fs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Uses: NextPage<{ length: number }> = ({ length }) => {
  const { t } = useTranslation('common')

  return (
    <Wrapper>
      <Header head={t('photographyHeader')} bio={t('photographyBio')} />
      <Photos length={length} />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const files = await fs.readdir('public/static/photography')
  return {
    props: {
      length: files.length,
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  }
}

export default Uses
