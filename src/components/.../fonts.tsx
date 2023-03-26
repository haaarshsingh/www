'use client'

import type { FC } from 'react'
import localFont from 'next/font/local'

const inter = localFont({
  src: '../../../public/fonts/inter.woff2',
  weight: '700',
  variable: '--font-display',
  display: 'swap',
})

const sohne = localFont({
  src: '../../../public/fonts/sohne.woff2',
  weight: '400',
  variable: '--font-sans',
  display: 'swap',
})

const fira = localFont({
  src: '../../../public/fonts/fira.woff2',
  weight: '400',
  variable: '--font-mono',
  display: 'swap',
})

const Fonts: FC = () => (
  <style jsx global>{`
    :root {
      --font-display: ${inter.style.fontFamily};
      --font-sans: ${sohne.style.fontFamily};
    }
  `}</style>
)

export const Monospace: FC = () => (
  <style jsx global>{`
    :root {
      --font-mono: ${fira.style.fontFamily}, monospace;
    }
  `}</style>
)

export default Fonts
