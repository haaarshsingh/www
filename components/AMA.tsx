import {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { motion } from 'framer-motion'
import * as A from '@anims/index'
import type { Question as QuestionType } from '@typings/types'
import { sanitize } from 'dompurify'
import { cva } from 'class-variance-authority'

const AMA: FC<{ questions: QuestionType[] }> = ({ questions }) => {
  return (
    <motion.div
      className='mt-12'
      variants={A.FadeContainer}
      initial='hidden'
      animate='visible'
    >
      <motion.h1 className='!text-2xl' variants={A.Fade}>
        Ask Me Anything
      </motion.h1>
      <motion.p variants={A.Fade} className='my-4'>
        Curious about me? Ask away.
      </motion.p>
      <Form />
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
        className='w-full my-8 bg-gray-100 dark:bg-gray-900 rounded-md border-gray-600 dark:border-gray-700 border p-5 resize-y text-base text-gray-900 dark:text-white box-border outline-none focus:bg-gray-200 transition-colors'
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
