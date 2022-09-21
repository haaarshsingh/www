import '@css/tailwind.css'
import '@components/Nav/nav.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import global from '@css/global.style'

const Portfolio = ({ Component, pageProps }: AppProps) => {
  global()

  return (
    <>
      <NextNProgress color='#FF70C6' />
      <Component {...pageProps} />
    </>
  )
}

export default Portfolio
