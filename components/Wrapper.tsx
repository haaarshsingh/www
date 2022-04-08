import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Nav'
import Footer from './Footer'
import BackToTop from './Top'

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const meta = {
    root: 'https://hxrsh.in',
    title: 'Harsh Singh',
    description:
      "👋 Hi there, I'm Harsh. 15yo highschool student & serverless fan",
    image: '/banner.png',
    type: 'website',
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>'
        />
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:url' content={`${meta.root}${router.asPath}`} />
        <link rel='canonical' href={`${meta.root}${router.asPath}`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Harsh Singh' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@leeerob' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
      </Head>
      <div className='flex flex-col items-center'>
        <div className='max-w-95 lg:max-w-60 2xl:max-w-40 xl:max-w-30 mt-10'>
          <Navbar />
          <main id='main'>{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </div>
    </div>
  )
}

export default Wrapper
