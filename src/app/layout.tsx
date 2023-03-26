import '@css/globals.css'
import type { Metadata } from 'next'
import { Root } from '@components/Layout'
import AnalyticsWrapper from '@components/.../analytics'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import BackToTop from '@components/BackToTop'
import localFont from 'next/font/local'
import clsx from 'clsx'

const inter = localFont({
  src: './fonts/inter.woff2',
  weight: '700',
  variable: '--font-display',
  display: 'swap',
})

const sohne = localFont({
  src: './fonts/sohne.woff2',
  weight: '400',
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Harsh Singh', template: '%s — Harsh Singh' },
  creator: 'Harsh Singh',
  publisher: 'Harsh Singh',
  description: 'Building tools and polished user interactions.',
  keywords: ['Harsh Singh', 'harshhhdev'],
  authors: [{ name: 'Harsh Singh', url: 'https://harshsingh.xyz' }],
  colorScheme: 'dark light',
  openGraph: {
    title: 'Harsh Singh',
    description: 'Building tools and polished user interactions.',
    url: 'https://harshsingh.xyz',
    siteName: 'Harsh Singh',
    images: [
      { url: 'https://harshsingh.xyz/og.png', width: 1200, height: 630 },
      {
        url: 'https://harshsingh.xyz/og-alt.png',
        width: 1200,
        height: 630,
        alt: 'A white background with the text "Harsh Singh" in the center',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicons/favicon.png',
    shortcut: '/favicons/shortcut.png',
    apple: [
      { url: '/favicons/apple-touch-icon.png' },
      {
        url: '/favicons/apple-icon-x3.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicons/apple-touch-icon-precomposed.png',
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E5E5E5' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Singh',
    description: 'Building tools and polished user interactions.',
    siteId: 'harshhhdev',
    creator: '@harshhhdev',
    creatorId: 'harshhhdev',
    images: {
      url: 'https://harshsingh.xyz/og.png',
      alt: 'A black background with noise and "Harsh Singh" written across the center',
    },
  },
  verification: {
    google: 'VWhTtgTikPqvWIY4n2rlUj6Fe9YgkfFMEET3TM7Rce0',
    yandex: 'cfc27cbb03eb0a9c',
    yahoo: 'yahoo',
    other: { me: ['hi.harsh@pm.me'] },
  },
  alternates: {
    canonical: 'https://harshsingh.xyz',
    types: { 'application/rss+xml': 'https://harshsingh.xyz/rss.xml' },
  },
  assets: ['https://harshsingh.xyz/assets.zip'],
  category: 'technology',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en' className={clsx(inter.variable, sohne.variable)}>
    <body>
      <Nav />
      <Root>{children}</Root>
      <BackToTop />
      <Footer />
      <AnalyticsWrapper />
    </body>
  </html>
)

export default RootLayout
