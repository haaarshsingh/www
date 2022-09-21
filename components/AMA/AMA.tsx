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
import { FadeContainer, Fade } from '@anims/index'
import type { Question as QuestionType } from '@typings/types'
import { sanitize } from 'dompurify'
import { cva } from 'class-variance-authority'
import * as S from './AMA.style'

const AMA: FC<{ questions: QuestionType[] }> = ({ questions }) => {
  return (
    <S.Wrapper variants={FadeContainer} initial='hidden' animate='visible'>
      <motion.h1 variants={Fade}>Ask Me Anything</motion.h1>
      <S.Description variants={Fade}>
        Ask away, but keep in mind that I may take a while to respond.
      </S.Description>
      <Form />
      {questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </S.Wrapper>
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
    <S.Form onSubmit={createPost} variants={Fade}>
      <S.Textarea placeholder='Ask away...' maxLength={100} ref={content} />
      {visible && <S.Message>I will try my best to respond soon.</S.Message>}
      {error !== '' && <S.Message error>{error}</S.Message>}
      <Button loading={loading} setLoading={setLoading} />
    </S.Form>
  )
}

const Question: FC<{ question: QuestionType }> = ({ question }) => {
  return (
    <motion.div variants={Fade}>
      <S.QuestionTitle>{question.content}</S.QuestionTitle>
      <S.Question>{question.answer}</S.Question>
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
  const ref = useRef<HTMLButtonElement>(null)

  const [aspectRatio, setAspectRatio] = useState(1)
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
      <span className='button_content'>
        <span
          {...(loading ? { role: 'progressbar' } : {})}
          aria-hidden={!loading}
        >
          {loading ? 'Loading...' : 'Ask Question'}
        </span>
      </span>
      <span aria-hidden className='button_disco' />
    </button>
  )
}

export default AMA
