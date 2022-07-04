import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class PortfolioDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='bg-body-light dark:bg-gray-900'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
