import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@lib/prisma'

const question = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const session = await getSession({ req })
    const { content } = req.body

    if (session) {
      try {
        const question = await prisma.question.create({
          data: { content: content },
        })

        return res.status(200).json({ question })
      } catch (err) {
        console.error(err)
        return res.status(509).json({ error: err })
      }
    }
  }

  if (req.method === 'PUT') {
    const session = await getSession({ req })
    const { answer, id } = req.body

    if (session) {
      try {
        const question = await prisma.question.update({
          where: { id: id },
          data: { answer: answer, status: 'ANSWERED' },
        })

        return res.status(200).json({ question })
      } catch (err) {
        console.error(err)
        return res.status(509).json({ error: err })
      }
    }
  }

  const questions = await prisma.question.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return res.status(200).json(
    questions.map((question) => ({
      id: question.id,
      status: question.status,
      content: question.content,
      answer: question.answer,
      createdAt: question.createdAt,
    }))
  )
}

export default question
