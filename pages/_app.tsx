import '@css/tailwind.css'
import '@components/Nav/nav.css'
import 'kmenu/dist/index.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
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

export default appWithTranslation(Portfolio)
