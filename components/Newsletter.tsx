import { FC } from 'react'
import { useTranslation } from 'next-i18next'

const Newsletter: FC = () => {
  const { t } = useTranslation('common')

  return (
    <div className='mt-60 mb-20 p-5 md:p-10 rounded-lg border-gray-200 dark:border-gray-700 border-2'>
      <h1>{t('newsletter')}</h1>
      <p className='my-5 text-lg'>{t('newsletterBio')}</p>
      <form className='bg-gray-200 dark:bg-gray-700 flex justify-between items-center text-lg rounded-lg overflow-hidden'>
        <input
          placeholder={t('placeholder')}
          type='email'
          className='bg-gray-200 dark:bg-gray-700 outline-none text-gray-900 dark:text-white h-full m-5 text-lg w-full'
        />
        <button className='outline-none bg-white h-full text-lg p-5 hover:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 whitespace-nowrap'>
          {t('subscribe')}
        </button>
      </form>
    </div>
  )
}

export default Newsletter
