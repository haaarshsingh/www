import { FC, FormEvent, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { sanitize } from 'dompurify'

const Newsletter: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [visible, setVisible] = useState(false)
  const [error, setError] = useState(false)
  const { t } = useTranslation('common')

  const subscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputRef!.current!.value === '') return

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      body: sanitize(inputRef.current?.value!),
    })

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: headers,
      body: raw,
    }

    try {
      await fetch('/api/newsletter', requestOptions)

      setVisible(true)
      inputRef!.current!.value = ''
    } catch (err) {
      setError(true)
      console.error(err)
    }
  }

  return (
    <div className='mt-60 mb-20 p-5 md:p-10 rounded-lg border-gray-200 dark:border-gray-700 border-2'>
      <h1 className='text-xl'>{t('newsletter')}</h1>
      <p className='mt-5 mb-8 text-base'>{t('newsletterBio')}</p>
      <form
        className='bg-gray-200 dark:bg-gray-700 flex justify-between items-center text-lg rounded-lg overflow-hidden'
        onSubmit={subscribe}
      >
        <input
          placeholder={t('placeholder')}
          type='email'
          className='bg-gray-200 dark:bg-gray-700 outline-none text-gray-900 dark:text-white h-full m-5 text-base w-full'
          ref={inputRef}
        />
        <button className='bg-white h-full text-base p-5 hover:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 whitespace-nowrap outline-none focus-visible:bg-gray-300'>
          {t('subscribe')}
        </button>
      </form>
      {visible && (
        <p className='mt-5 text-xl text-green-400'>
          Yay! You are now subscribed to my newsletter.
        </p>
      )}
      {error && (
        <p className='text-rose-400'>😅 An error occured, try again!</p>
      )}
    </div>
  )
}

export default Newsletter
