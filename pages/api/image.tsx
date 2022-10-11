import { ImageResponse } from '@vercel/og'
import { NextApiRequest } from 'next'

export const config = {
  runtime: 'experimental-edge',
}

// @ts-ignore
const font = fetch(new URL('../../public/Inter.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer()
)

// @ts-ignore
const fontBold = fetch(
  new URL('../../public/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

const handler = async (
  req: NextApiRequest & {
    nextUrl: { searchParams: { get: (key: string) => string } }
  }
) => {
  const { searchParams } = req.nextUrl

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#1C1C1C',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#FFFFFF',
          width: 1200,
          height: 630,
          fontFamily: '"Inter"',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', padding: 50 }}>
          <h1
            style={{
              fontSize: 32,
              margin: '0 0 10px 0',
              fontFamily: '"Inter Bold"',
            }}
          >
            {searchParams.get('title')}
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: '32px',
              color: '#747474',
              margin: 0,
            }}
          >
            {searchParams.get('description')}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 50px 50px 50px',
            width: '100%',
          }}
        >
          <p
            style={{
              fontSize: 18,
              lineHeight: '32px',
              color: '#747474',
              margin: 0,
            }}
          >
            {searchParams.get('date')}
          </p>
          <p
            style={{
              fontSize: 18,
              lineHeight: '32px',
              color: '#747474',
              margin: 0,
            }}
          >
            {searchParams.get('time')} minutes •{' '}
            {parseInt(searchParams.get('words')).toLocaleString()} words
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await font,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter Bold',
          data: await fontBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}

export default handler
