import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@css/theme.config'
export default class PortfolioDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code&display=swap'
            rel='stylesheet'
          />
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body className='bg-gray-900'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
