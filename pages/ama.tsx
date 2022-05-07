import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Wrapper from '@components/Wrapper'
import AskMeAnything from '@components/AMA'
import Newsletter from '@components/Newsletter'
import prisma from '@lib/prisma'
import { Question } from '@prisma/client'

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

/**
 * Using SSR here apparently rendering messes up next-i18next?
 */
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const questions = await prisma.question.findMany({
    where: { status: 'ANSWERED' },
    orderBy: { createdAt: 'desc' },
  })

  return {
    props: {
      questions,
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  }
}

export default AMA
