import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps, NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import { useTranslation } from 'next-i18next'
import Header from '@components/Header'
import Words from '@components/Words'

const Uses: NextPage<{ uses: { body: { code: string } } }> = ({ uses }) => {
  const { t } = useTranslation('common')

  return (
    <Wrapper
      title='Words'
      description='A small collection of random English words that I really like'
    >
      <Header head={t('wordsHeader')} bio={t('wordsBio')} />
      <Words />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale!, ['common'])) },
  }
}

export default Uses
