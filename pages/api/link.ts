import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@lib/prisma'
import { CustomSession } from './auth/[...nextauth]'

const link = async (req: NextApiRequest, res: NextApiResponse) => {
  const session: CustomSession | null = await getSession({ req })
  const { slug, url } = req.body

  if (typeof session?.user?.id === 'string') {
    try {
      const shortenedLink = prisma.link.create({
        data: {
          slug: slug,
          url: url,
          userId: session.user.id,
        },
      })

      return res.status(200).json({ shortenedLink })
    } catch (err) {
      console.error(err)
      return res.status(509).json({ error: err })
    }
  }

  return res.status(401).json({ error: "User isn't authenticated" })
}

export default link
