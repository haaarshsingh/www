import '@css/tailwind.css'
import '@components/Nav/nav.css'

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import NextNProgress from 'nextjs-progressbar'
import { SessionProvider } from 'next-auth/react'
import Palette from '@components/Palette'
import { KBarProvider } from 'kbar'
import { ThemeProvider } from 'next-themes'

import splitbee from '@splitbee/web'
import actions from '@lib/actions'

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
      <KBarProvider
        options={{
          enableHistory: true,
        }}
        actions={actions}
      >
        <SessionProvider>
          <Palette />
          <NextNProgress color='#FF70C6' />
          <Component {...pageProps} />;
        </SessionProvider>
      </KBarProvider>
    </ThemeProvider>
  )
}

export default appWithTranslation(Portfolio)
