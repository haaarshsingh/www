/*
 * A sort of dashboard for myself, only viewable to me and other admins.
 * As I'm the only one viewing this, it's pretty ugly and unstyled.
 * */
import type { GetServerSideProps, NextPage } from 'next'
import prisma from '@lib/prisma'
import { Question } from '@prisma/client'
import { FormEvent, useRef } from 'react'
import { useSession } from 'next-auth/react'
import NotFound from '@pages/404'

const QuestionsDashboard: NextPage<{ questions: Question[] }> = ({
  questions,
}) => {
  const { data: session, status } = useSession()

  const id = useRef<HTMLInputElement>(null)
  const content = useRef<HTMLTextAreaElement>(null)

  if (session?.user?.email !== 'hi.harsh@protonmail.ch') return <NotFound />

  const addAnswer = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (content!.current!.value === '') return

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      id: id.current?.value!,
      answer: content.current?.value!,
    })

    const requestOptions: RequestInit = {
      method: 'PUT',
      headers: headers,
      body: raw,
    }

    try {
      await fetch('/api/question', requestOptions)

      id!.current!.value = ''
      content!.current!.value = ''
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.id}</p>
          <h1>{question.content}</h1>
        </div>
      ))}
      <form className='mt-10 flex flex-col' onSubmit={addAnswer}>
        <input placeholder='ID of question...' ref={id} />
        <textarea placeholder='Write an answer...' ref={content} />
        <button>submit</button>
      </form>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const questions = await prisma.question.findMany({
    where: { status: 'UNANSWERED' },
    orderBy: { createdAt: 'desc' },
  })

  return {
    props: {
      questions,
    },
  }
}

export default QuestionsDashboard
