import React from 'react'

import Head from 'next/head'

const Header: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  const link = 'https://harshhhdev.github.io/'
  return (
    <Head>
      <title>Harsh Singh - {title}</title>
      <meta property='og:title' content={title} />
      <meta property='twitter:title' content={title} />
      <meta name='description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={link} />
      <meta property='og:description' content={description} />
      <meta property='twitter:url' content={link} />
      <meta property='twitter:description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta http-equiv='X-UA-Compatible' content='ie=edge' />
      <meta name='theme-color' content='#0da7ee' />
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>'
      />
    </Head>
  )
}

export default Header
