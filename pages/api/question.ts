import pool from '@lib/db'
import type { Question } from '@typings/types'
import { NextApiRequest, NextApiResponse } from 'next'

const question = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await pool.connect()

  if (req.method === 'POST') {
    const { content } = req.body

    try {
      const query = await client.query(
        `INSERT INTO "public"."Question" (id, "createdAt", status, content) VALUES (gen_random_uuid(), NOW(), 'UNANSWERED', '${content}')`
      )

      return res.status(200).json({ question: query.rows })
    } catch (err) {
      console.error(err)
      return res.status(509).json({ error: err })
    }
  }

  const questions = await client.query('SELECT * FROM "public"."Question"')

  return res.status(200).json(
    questions.rows.map((question: Question) => ({
      id: question.id,
      status: question.status,
      content: question.content,
      answer: question.answer,
      createdAt: question.createdAt,
    }))
  )
}

export default question
