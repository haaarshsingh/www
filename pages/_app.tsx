import { AppProps } from 'next/app'
import MouseContextProvider from '@lib/Mouse/MouseContext'

export default function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <MouseContextProvider>
      <Component {...pageProps} />
    </MouseContextProvider>
  )
}
