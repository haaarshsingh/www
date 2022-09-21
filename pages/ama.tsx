import type { GetServerSideProps, NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import AskMeAnything from '@components/AMA/AMA'
import type { Question } from '@typings/types'
import pool from '@lib/db'

const AMA: NextPage<{ questions: Question[] }> = ({ questions }) => {
  return (
    <Wrapper
      title='Ask me Anything'
      description='Ask away. I will do my best to respond.'
    >
      <AskMeAnything questions={questions} />
    </Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const client = await pool.connect()
    const result = await client.query(
      'SELECT * FROM public."Question" WHERE status=\'ANSWERED\''
    )

    return {
      props: {
        questions: result.rows,
      },
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: {
      questions: undefined,
    },
  }
}

export default AMA
