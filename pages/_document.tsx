import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssString } from '@css/theme.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
          <link
            rel='preload'
            href='/GTWalsheimPro-Regular.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
