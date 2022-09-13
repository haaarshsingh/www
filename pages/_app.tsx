import '@css/tailwind.css'
import '@components/Nav/nav.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'
import splitbee from '@splitbee/web'

const Portfolio = ({ Component, pageProps }: AppProps) => {
  splitbee.init()

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      value={{
        dark: 'dark',
        light: 'light',
      }}
    >
      <NextNProgress color='#FF70C6' />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default Portfolio
