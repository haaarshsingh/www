import type { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Wrapper from '@components/Wrapper'
import AskMeAnything from '@components/AMA'
import Newsletter from '@components/Newsletter'
import type { Question } from '@typings/types'
import pool from '@lib/db'

const AMA: NextPage<{ questions: Question[] }> = ({ questions }) => {
  return (
    <Wrapper
      title='Ask me Anything'
      description='Yeah... you heard it right. Ask away! Just keep it (somewhat) family friendly, and I will do my best to respond.'
    >
      <AskMeAnything questions={questions} />
      <Newsletter />
    </Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const client = await pool.connect()
    const result = await client.query(
      'SELECT * FROM public."Question" WHERE status=\'ANSWERED\''
    )

    return {
      props: {
        questions: result.rows,
        ...(await serverSideTranslations(locale!, ['common'])),
      },
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: {
      questions: undefined,
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  }
}

export default AMA
