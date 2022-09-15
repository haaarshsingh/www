import '@css/tailwind.css'
import '@components/Nav/nav.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import splitbee from '@splitbee/web'

const Portfolio = ({ Component, pageProps }: AppProps) => {
  splitbee.init()

  return (
    <>
      <NextNProgress color='#FF70C6' />
      <Component {...pageProps} />
    </>
  )
}

export default Portfolio
