import { FC, FormEvent, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import * as A from '@anims/index'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useTranslation } from 'next-i18next'
import { sanitize } from 'dompurify'

const Shortener: FC = () => {
  const { t } = useTranslation('common')
  const { data: session, status } = useSession()

  return (
    <motion.div
      className='mt-20'
      variants={A.FadeContainer}
      initial='hidden'
      animate='visible'
    >
      <motion.h1 className='text-5xl my-7 w-fit !text-transparent !bg-clip-text !from-gradient-100 !to-gradient-200 !bg-gradient-to-r'>
        Whoa! What's this?
      </motion.h1>
      <motion.p className='text-lg'>
        Hey there. My URL shortener currently isn't available for public use.
        With that being said however, please don't hesitate to{' '}
        <a className='link' href='mailto:hi.harsh@pm.me'>
          email
        </a>{' '}
        me or DM me on{' '}
        <a className='link' href='https://twitter.com/harshhhdev'>
          Twitter
        </a>{' '}
        if you're interested in using it.
      </motion.p>
      {/* <motion.div className='flex items-center text-lg mb-5'>
        {session ? (
          <>
            <Image
              width={40}
              height={40}
              src='https://avatars.githubusercontent.com/u/69592270?v=4'
              alt='profile'
              className='rounded-full'
            />
            <Link href='/api/auth/logout' passHref>
              <a className='ml-3'>{t('logout')}</a>
            </Link>
          </>
        ) : (
          <a href='#' onClick={() => signIn('github')}>
            {t('loginWithGitHub')}
          </a>
        )}
      </motion.div>
      <motion.h1 className='text-5xl my-7 w-fit !text-transparent !bg-clip-text !from-gradient-100 !to-gradient-200 !bg-gradient-to-r'>
        {t('shortenerHeader')}
      </motion.h1>
      <motion.p className='text-lg'>{t('shortenerBio')}</motion.p>
      {true ? (
        <Form />
      ) : (
        <div className='border-gray-200 dark:border-gray-700 border-2 rounded-lg my-16 p-10'>
          <h3 className='text-3xl'>Want to shorten a link?</h3>
          <p className='text-lg mt-10'>
            Continue by connecting your GitHub account with this website!
          </p>
          <p className='text-lg'>
            No information is displayed to users of this website
          </p>
        </div>
      )} */}
    </motion.div>
  )
}

const Form: FC = () => {
  const slug = useRef<HTMLInputElement>(null)
  const url = useRef<HTMLInputElement>(null)
  const [visible, setVisible] = useState(false)
  const [error, setError] = useState('')

  const createPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (slug!.current!.value === '' || url!.current!.value === '') return

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      slug: sanitize(slug.current?.value!),
      url: sanitize(url.current?.value!),
    })

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: headers,
      body: raw,
    }

    try {
      await fetch('/api/url', requestOptions)

      setVisible(true)

      slug!.current!.value = ''
      url!.current!.value = ''
    } catch (err) {
      if (typeof err === 'string') setError(err)
      console.log(err)
    }
  }
  return (
    <form className='my-10'>
      <div className='flex'>
        <p className='text-3xl text-white'>https://hxrsh.in/</p>
        <input
          placeholder='your-slug'
          className='bg-transparent text-3xl w-full outline-none'
        />
      </div>
      <div className='flex'>
        <p className='text-3xl text-white'>https://</p>
        <input
          placeholder='example.com'
          className='bg-transparent text-3xl w-full outline-none'
        />
      </div>
      {visible && (
        <p className='mt-5 text-green-400 mb-5'>
          🎉 Your link is live at{' '}
          <a
            href={`https://hxrsh.in/gay`}
            className='text-gray-900 dark:text-white underline underline-offset-4 decoration-gray-600 hover:decoration-gray-500'
          >
            hxrsh.in/gay!
          </a>
        </p>
      )}
      {error !== '' && <p className='mt-5 text-rose-400'>😅 {error}</p>}
      <button
        className='my-10 text-white bg-gray-900 dark:text-gray-900 dark:bg-white px-8 py-3 text-lg rounded border border-solid border-gray-900 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white focus:bg-gray-100 dark:focus-visible:bg-gray-900 focus:text-gray-900 dark:focus:text-white duration-200'
        type='submit'
      >
        Create URL
      </button>
    </form>
  )
}

export default Shortener
