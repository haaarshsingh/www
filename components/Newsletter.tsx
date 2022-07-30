import { FC, useRef } from 'react'
import { useTranslation } from 'next-i18next'

const Newsletter: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { t } = useTranslation('common')

  return (
    <div className='mt-60 mb-20 p-5 md:p-10 rounded-lg border-gray-200 dark:border-gray-700 border-2'>
      <h1 className='text-xl'>{t('newsletter')}</h1>
      <p className='mt-5 mb-8 text-base'>{t('newsletterBio')}</p>
      <form
        className='bg-gray-200 dark:bg-gray-700 flex justify-between items-center text-lg rounded-lg overflow-hidden'
        action='http://newsletter.hxrsh.in/add_subscriber'
        method='post'
        id='revue-form'
        name='revue-form'
        target='_blank'
        onSubmit={() => (inputRef.current!.value = '')}
      >
        <input
          placeholder={t('placeholder')}
          type='email'
          className='bg-gray-200 dark:bg-gray-700 outline-none text-gray-900 dark:text-white h-full m-5 text-base w-full'
          name='member[email]'
          id='member_email'
          ref={inputRef}
        />
        <button className='bg-white h-full text-base p-5 hover:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 whitespace-nowrap outline-none focus-visible:bg-gray-300'>
          {t('subscribe')}
        </button>
      </form>
    </div>
  )
}

export default Newsletter
