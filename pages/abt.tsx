import { GetStaticProps, NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '@components/MDX'
import Wrapper from '@components/Wrapper'
import Header from '@components/Header'
import { allInfos } from '@layer/generated'

const About: NextPage<{ about: { body: { code: string } } }> = ({ about }) => {
  const Component = useMDXComponent(about.body.code)

  return (
    <Wrapper
      title='About'
      description='A brief overview of who I am, what I do, and where I started. This page also has important links for event organisers to download headshots along with my speaker bio.'
    >
      <div className='mt-12'>
        <h1 className='!text-2xl'>About</h1>
        <p className='my-4 mb-16'>
          <i>No to laugh, not to lament, not to detest, but to understand.</i>{' '}
          This page contains some information about me, mainly for event
          organisers and other curious folks looking to learn a bit more about
          me.
        </p>
      </div>
      <div className='blog'>
        <Component components={components} />
      </div>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const about = allInfos.find(
    (page: { slug: string }) => page.slug === 'about'
  )!
  return { props: { about } }
}

export default About
