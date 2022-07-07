import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { FC } from 'react'

const NotFound: FC = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1 className='my-20 text-5xl'>{t('lost')}</h1>
      <div className='blog'>
        <p>
          {t('broken')}
          <Link href='https://github.com/harshhhdev/harshhhdev.github.io/issues/new'>
            harshhhdev/harshhhdev.github.io
          </Link>
        </p>
        <p>
          {t('readBlog')}
          <Link href='/blog'>blog?</Link>
        </p>
      </div>
    </div>
  )
}

export default NotFound
