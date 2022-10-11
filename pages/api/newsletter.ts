import { NextApiRequest, NextApiResponse } from 'next'

const newsletter = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  try {
    const response = await fetch(
      `https://api.buttondown.email/v1/subscribers`,
      {
        body: JSON.stringify({ email }),
        headers: {
          Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    )

    return res.status(200).json({ response })
  } catch (err) {
    return res.status(500).json({ err })
  }
}

export default newsletter
