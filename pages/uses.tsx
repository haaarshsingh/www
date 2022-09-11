import type { GetStaticProps, NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '@components/MDX'
import Wrapper from '@components/Wrapper'
import { allInfos } from '@layer/generated'

const Uses: NextPage<{ uses: { body: { code: string } } }> = ({ uses }) => {
  const Component = useMDXComponent(uses.body.code)

  return (
    <Wrapper
      title='Uses'
      description='A list of hardware and software tools that I use on a daily basis'
    >
      <div className='mt-12'>
        <h1 className='!text-2xl'>Uses</h1>
        <p className='my-4 mb-16'>
          My workspace and tools, the things which foster my productivity.{' '}
          <i>
            Productivity is being able to do things that you were never able to
            do before.
          </i>
        </p>
      </div>
      <div className='blog'>
        <Component components={components} />
      </div>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const uses = allInfos.find((page: { slug: string }) => page.slug === 'uses')!

  return {
    props: { uses },
  }
}

export default Uses
