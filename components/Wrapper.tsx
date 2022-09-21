import { FC, ReactNode, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Nav/Nav'
import Footer from './Footer'
import BackToTop from './Top'
import { styled } from '@css/theme.config'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const ContentWrapper = styled('div', {
  width: '95vw',
  marginTop: 40,
  '@lg': { width: '60vw' },
  '@2xl': { width: '40vw' },
})

export const meta = {
  root: 'https://harshsingh.xyz',
  title: 'Harsh Singh',
  description:
    '🎨🛠️ 16yo frontend engineer who enjoys design, Vim, Linux, tinkering with databases and other computer things',
  image: 'https://harshsingh.xyz/banner.png',
  type: 'website',
}

const Wrapper: FC<{
  children: ReactNode
  title?: string
  description?: string
  image?: string
}> = ({ children, title, description, image }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Head>
        <title>{title ? title : meta.title}</title>
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>'
        />
        <meta name='robots' content='follow, index' />
        <meta
          content={description ? description : meta.description}
          name='description'
        />
        <meta property='og:url' content={`${meta.root}${router.asPath}`} />
        <link rel='canonical' href={`${meta.root}${router.asPath}`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Harsh Singh' />
        <meta
          property='og:description'
          content={description ? description : meta.description}
        />
        <meta property='og:title' content={title ? title : meta.title} />
        <meta property='og:image' content={image ? image : meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@harshhhdev' />
        <meta name='theme-color' content='#FF70C6' />
        <meta name='twitter:title' content={title ? title : meta.title} />
        <meta
          name='twitter:description'
          content={description ? description : meta.description}
        />
        <meta name='twitter:image' content={image ? image : meta.image} />
      </Head>
      <Container>
        <ContentWrapper>
          <Navbar navOpen={open} setNavOpen={setOpen} />
          {!open && (
            <main id='main'>
              {children}
              <Footer />
            </main>
          )}
          <BackToTop />
        </ContentWrapper>
      </Container>
    </div>
  )
}

export default Wrapper
