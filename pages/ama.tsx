import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Wrapper from '@components/Wrapper'
import AskMeAnything from '@components/AMA'
import Newsletter from '@components/Newsletter'
import prisma from '@lib/prisma'
import { Question } from '@prisma/client'

const AMA: NextPage<{ questions: Question[] }> = ({ questions }) => {
  return (
    <Wrapper>
      <AskMeAnything questions={questions} />
      <Newsletter />
    </Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
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
