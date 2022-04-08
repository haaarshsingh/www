import type { NextApiRequest, NextApiResponse } from 'next'
import { userInfo } from '@lib/github'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await userInfo()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )

  return res.status(200).json({
    followers: user.followers,
  })
}
