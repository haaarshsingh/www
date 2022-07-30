import Image from 'next/image'
import { FC, FormEvent, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import * as A from '@anims/index'
import { Question as QuestionType } from '@prisma/client'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { sanitize } from 'dompurify'

const AMA: FC<{ questions: QuestionType[] }> = ({ questions }) => {
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
            <Link href='/api/auth/signout' passHref>
              <a className='ml-3'>{t('logout')}</a>
            </Link>
          </motion.div>
        ) : (
          <motion.a variants={A.Fade} href='#' onClick={() => signIn('github')}>
            {t('loginWithGitHub')}
          </motion.a>
        )}
      </motion.div>
      <motion.h1
        className='!text-3xl my-7 w-fit !text-transparent !bg-clip-text !from-gradient-100 !to-gradient-200 !bg-gradient-to-r'
        variants={A.Fade}
      >
        {t('amaHeader')}
      </motion.h1>
      <motion.p className='text-lg' variants={A.Fade}>
        {t('amaBio')}
      </motion.p>
      {true ? (
        <Form />
      ) : (
        <motion.div
          className='border-gray-200 dark:border-gray-700 border-2 rounded-lg my-16 p-10'
          variants={A.Fade}
        >
          <h3 className='text-3xl'>Have a question?</h3>
          <p className='text-lg mt-10'>
            Continue by connecting your GitHub account with this website!
          </p>
          <p className='text-lg'>
            No information is displayed to users of this website
          </p>
        </motion.div>
      )}
      {questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </motion.div>
  )
}

const Form: FC = () => {
  const content = useRef<HTMLTextAreaElement>(null)
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const createPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (content !== null && content.current!.value === '') return
    setLoading(true)

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      content: sanitize(content.current?.value!),
    })

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: headers,
      body: raw,
    }

    fetch('/api/question', requestOptions)
      .then(async (res) => {
        if (res.status === 200) {
          setVisible(true)
          setLoading(false)
        } else {
          const response = await res.json()
          setError(response.error)
          setLoading(false)
        }

        return (content.current!.value = '')
      })
      .catch(async (err) => {
        setError(err)
        setLoading(false)
        console.error(err)
      })
  }

  return (
    <motion.form
      className='w-full mb-16'
      onSubmit={createPost}
      variants={A.Fade}
    >
      <textarea
        placeholder='Ask away...'
        maxLength={100}
        ref={content}
        className='w-full mt-8 mb-2 bg-gray-100 dark:bg-gray-900 rounded-md border-gray-300 dark:border-gray-700 border p-5 resize-y text-base text-gray-900 dark:text-white box-border outline-none focus:bg-gray-200 dark:focus:bg-gray-800 transition-all'
      />
      {visible && (
        <motion.p className='text-green-400 mb-5'>
          🎉 I will try my best to respond soon!
        </motion.p>
      )}
      {error !== '' && <p className='text-rose-400 mb-5'>{error}</p>}
      {loading ? (
        <motion.button
          className='flex items-center justify-center mt-3 w-28 h-14 bg-gray-200 dark:bg-gray-800 px-8 py-3 text-lg rounded border border-solid border-gray-300 dark:border-gray-500 cursor-not-allowed'
          type='submit'
          variants={A.Fade}
          disabled
        >
          <div className='loading' />
        </motion.button>
      ) : (
        <motion.button
          className='flex items-center justify-center mt-3 w-28 h-14 text-white bg-gray-900 dark:text-gray-900 dark:bg-white px-8 py-3 text-lg rounded border border-solid border-gray-900 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white focus:bg-gray-100 dark:focus-visible:bg-gray-900 focus:text-gray-900 dark:focus:text-white duration-200'
          type='submit'
          variants={A.Fade}
        >
          Ask
        </motion.button>
      )}
    </motion.form>
  )
}

const Question: FC<{ question: QuestionType }> = ({ question }) => {
  return (
    <motion.div variants={A.Fade}>
      <h1 className='mb-5 !text-xl'>{question.content}</h1>
      <p className='text-base mb-10'>{question.answer}</p>
    </motion.div>
  )
}

export default AMA
