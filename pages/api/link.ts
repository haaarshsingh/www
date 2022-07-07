import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@lib/prisma'
import { CustomSession } from './auth/[...nextauth]'

const link = async (req: NextApiRequest, res: NextApiResponse) => {
  const session: CustomSession | null = await getSession({ req })
  const { slug, url } = req.body

  const shortenedLink = prisma.link.create({
    data: {
      slug: slug,
      url: url,
      userId: 'cl1pj1tkh00063nv1flxlefw6',
    },
  })

  return res.status(200).json({ shortenedLink })
}

export default link
