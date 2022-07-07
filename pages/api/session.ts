import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'

const session = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  res.send(JSON.stringify(session, null, 2))
}

export default session
