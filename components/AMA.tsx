import {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import * as A from '@anims/index'
import type { Question as QuestionType } from '@typings/types'
import { sanitize } from 'dompurify'
import { cva } from 'class-variance-authority'

const AMA: FC<{ questions: QuestionType[] }> = ({ questions }) => {
  const { t } = useTranslation('common')

  return (
    <motion.div
      className='mt-20'
      variants={A.FadeContainer}
      initial='hidden'
      animate='visible'
    >
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
        className='w-full my-8 bg-gray-100 dark:bg-gray-900 rounded-md border-gray-300 dark:border-gray-700 border p-5 resize-y text-base text-gray-900 dark:text-white box-border outline-none focus:bg-gray-200 dark:focus:bg-gray-800 transition-all'
      />
      {visible && (
        <motion.p className='text-green-400 mb-5'>
          🎉 I will try my best to respond soon!
        </motion.p>
      )}
      {error !== '' && <p className='text-rose-400 mb-5'>{error}</p>}
      <Button loading={loading} setLoading={setLoading} />
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

const button = cva('button', {
  variants: { loading: { true: 'is-busy' } },
  defaultVariants: {
    loading: false,
  },
})

const Button: FC<{
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}> = ({ loading, setLoading }) => {
  const [aspectRatio, setAspectRatio] = useState(1)

  const ref = useRef<HTMLButtonElement>(null)

  useEffect(
    () => setAspectRatio(ref.current!.clientWidth / ref.current!.clientHeight),
    []
  )

  return (
    <button
      ref={ref}
      className={button({ loading })}
      style={{
        ['--button-aspect-ratio' as string]: aspectRatio,
      }}
      onClick={() => {
        setLoading((loading) => !loading)
      }}
      type='submit'
    >
      <span className='button__content'>
        <span
          {...(loading ? { role: 'progressbar' } : {})}
          aria-hidden={!loading}
        >
          {loading ? 'Loading...' : 'Ask Question'}
        </span>
      </span>
      <span aria-hidden className='button__disco' />
    </button>
  )
}

export default AMA
