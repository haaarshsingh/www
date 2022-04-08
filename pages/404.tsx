import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps, NextPage } from 'next'
import { allInfos } from '@layer/generated'
import Wrapper from '@components/Wrapper'
import { useTranslation } from 'next-i18next'
import Header from '@components/Header'
import Newsletter from '@components/Newsletter'
import Link from 'next/link'

const About: NextPage<{ about: { body: { code: string } } }> = ({ about }) => {
  const { t } = useTranslation('common')

  return (
    <Wrapper>
      <h1 className='my-20 text-5xl'>{t('lost')}</h1>
      <div className='blog'>
        <p>
          {t('broken')}
          <Link href='htps://github.com/harshhhdev/harshhhdev.github.io/issues.new'>
            harshhhdev/harshhhdev.github.io
          </Link>
        </p>
        <p>
          {t('readBlog')}
          <Link href='/blog'>blog?</Link>
        </p>
      </div>
      <Newsletter />
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const about = allInfos.find(
    (page: { slug: string }) => page.slug === 'about'
  )!

  return {
    props: { about, ...(await serverSideTranslations(locale!, ['common'])) },
  }
}

export default About
