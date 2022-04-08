import { NextApiRequest, NextApiResponse } from 'next'

const question = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  const result = await fetch('https://www.getrevue.co/api/v2/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REVUE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
}

export default question
