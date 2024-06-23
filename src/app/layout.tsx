import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E5E5E5' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
}

export const metadata: Metadata = {
  title: { default: 'Harsh Singh', template: '%s — Harsh Singh' },
  creator: 'Harsh Singh',
  publisher: 'Harsh Singh',
  description: 'Building tools and polished user interactions.',
  keywords: ['Harsh Singh', 'harshhhdev'],
  authors: [{ name: 'Harsh Singh', url: 'https://harshsingh.xyz' }],
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
    icon: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex justify-center'>
          <div className='w-content my-24'>{children}</div>
        </div>
      </body>
    </html>
  )
}
