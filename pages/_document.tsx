import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class PortfolioDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;600;700&display=swap'
            rel='stylesheet'
            as='font'
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
