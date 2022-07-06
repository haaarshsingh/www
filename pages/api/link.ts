import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@lib/prisma'
import { CustomSession } from './auth/[...nextauth]'

const link = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
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

  if (req.method === 'GET') {
    const session: CustomSession | null = await getSession({ req })

    if (typeof session?.user?.id === 'string') {
      try {
        const userLinks = prisma.link.findMany({
          where: { userId: session.user.id },
        })

        return res.status(200).json({ userLinks })
      } catch (err) {
        console.error(err)
        return res.status(509).json({ error: err })
      }
    }

    return res.status(401).json({ error: "User isn't authenticated" })
  }
}

export default link
