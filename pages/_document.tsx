import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class PortfolioDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;800&family=Fira+Code&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-body-light dark:bg-gray-900'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
