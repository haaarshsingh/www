import { FC, FormEvent, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import * as A from '@anims/index'
import Image from 'next/image'
import NextLink from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useTranslation } from 'next-i18next'
import { sanitize } from 'dompurify'
import { FiCheck, FiClipboard } from 'react-icons/fi'
import type { Link as LinkType } from '@prisma/client'

const Shortener: FC<{ links: LinkType[] }> = ({ links }) => {
  const { t } = useTranslation('common')
  const { data: session, status } = useSession()

  return (
    <motion.div
      className='mt-20'
      variants={A.FadeContainer}
      initial='hidden'
      animate='visible'
    >
      <motion.div className='flex items-center text-lg mb-5'>
        {session ? (
          <motion.div variants={A.Fade} className='flex items-center'>
            <Image
              width={40}
              height={40}
              src={session.user?.image!}
              alt='Your profile pic'
              className='rounded-full'
            />
            <NextLink href='/api/auth/logout' passHref>
              <a className='ml-3'>{t('logout')}</a>
            </NextLink>
          </motion.div>
        ) : (
          <motion.a href='#' onClick={() => signIn('github')} variants={A.Fade}>
            {t('loginWithGitHub')}
          </motion.a>
        )}
      </motion.div>
      <motion.h1
        className='text-5xl my-7 w-fit !text-transparent !bg-clip-text !from-gradient-100 !to-gradient-200 !bg-gradient-to-r'
        variants={A.Fade}
      >
        {t('shortenerHeader')}
      </motion.h1>
      <motion.p className='text-lg' variants={A.Fade}>
        {t('shortenerBio')}
      </motion.p>
      {session ? (
        <Form />
      ) : (
        <motion.div
          variants={A.Fade}
          className='border-gray-200 dark:border-gray-700 border-2 rounded-lg my-16 p-10'
        >
          <h3 className='text-3xl'>Want to shorten a link?</h3>
          <p className='text-lg mt-10'>
            Continue by connecting your GitHub account with this website!
          </p>
          <p className='text-lg'>
            No information is displayed to users of this website
          </p>
        </motion.div>
      )}
      {links && (
        <>
          <motion.h1 variants={A.Fade}>Your Links</motion.h1>
          {links.map((link, index) => (
            <Link slug={link.slug} url={link.url} key={index} />
          ))}
        </>
      )}
    </motion.div>
  )
}

const Form: FC = () => {
  const slug = useRef<HTMLInputElement>(null)
  const url = useRef<HTMLInputElement>(null)
  const [newSlug, setNewSlug] = useState('')
  const [visible, setVisible] = useState(false)
  const [error, setError] = useState('')

  const createLink = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (slug!.current!.value === '' || url!.current!.value === '') return

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      slug: sanitize(`https://hxrsh.in/${slug.current?.value!}`),
      url: sanitize(`https://${url.current?.value!}`),
    })

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: headers,
      body: raw,
    }

    try {
      await fetch('/api/link', requestOptions)

      setVisible(true)
      setNewSlug(slug!.current!.value)

      slug!.current!.value = ''
      url!.current!.value = ''
    } catch (err) {
      if (typeof err === 'string') setError(err)
      console.log(err)
    }
  }

  return (
    <motion.form className='my-10' onSubmit={createLink} variants={A.Fade}>
      <motion.div className='flex items-center'>
        <p className='text-3xl text-white'>https://hxrsh.in/</p>
        <input
          placeholder='your-slug'
          className='bg-transparent text-3xl w-full outline-none'
          ref={slug}
        />
      </motion.div>
      <motion.div className='flex items-center mt-2'>
        <p className='text-3xl text-white'>https://</p>
        <input
          placeholder='example.com'
          className='bg-transparent text-3xl w-full outline-none'
          ref={url}
        />
      </motion.div>
      {visible && (
        <motion.p className='mt-5 text-green-400 mb-5'>
          🎉 Your link is live at{' '}
          <a
            href={`https://hxrsh.in/${newSlug}`}
            className='text-gray-900 dark:text-white underline underline-offset-4 decoration-gray-600 hover:decoration-gray-500'
          >
            hxrsh.in/{newSlug}!
          </a>
        </motion.p>
      )}
      {error !== '' && <p className='mt-5 text-rose-400'>😅 {error}</p>}
      <motion.button
        className='my-10 text-white bg-gray-900 dark:text-gray-900 dark:bg-white px-8 py-3 text-lg rounded border border-solid border-gray-900 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white focus:bg-gray-100 dark:focus-visible:bg-gray-900 focus:text-gray-900 dark:focus:text-white duration-200'
        type='submit'
      >
        Create URL
      </motion.button>
    </motion.form>
  )
}

const Link: FC<Pick<LinkType, 'slug' | 'url'>> = ({ slug, url }) => {
  const [copied, setCopied] = useState(false)
  const [originalCopied, setOriginalCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => setCopied(false), 10000)
  }, [copied, setCopied])

  useEffect(() => {
    setTimeout(() => setOriginalCopied(false), 10000)
  }, [originalCopied, setOriginalCopied])

  return (
    <motion.div variants={A.Fade} className='my-10'>
      <h1 className='flex items-center text-xl !text-gray-300'>
        Shortened URL:{' '}
        <NextLink href={`https://hxrsh.in/${slug}`} passHref>
          <a className='link ml-1'>hxrsh.in/{slug}</a>
        </NextLink>
        {copied ? (
          <FiCheck className='ml-2' />
        ) : (
          <FiClipboard
            className='ml-2 hover:text-white cursor-pointer transition-colors'
            onClick={() => {
              setCopied(true)
              navigator.clipboard.writeText(`https://hxrsh.in/${slug}`)
            }}
          />
        )}
      </h1>
      <h1 className='flex items-center text-xl !text-gray-300 mt-2'>
        Original URL:{' '}
        <NextLink href={url} passHref>
          <a className='link ml-1'>{url}</a>
        </NextLink>
        {originalCopied ? (
          <FiCheck className='ml-2' />
        ) : (
          <FiClipboard
            className='ml-2 hover:text-white cursor-pointer transition-colors'
            onClick={() => {
              setOriginalCopied(true)
              navigator.clipboard.writeText(url)
            }}
          />
        )}
      </h1>
    </motion.div>
  )
}

export default Shortener
