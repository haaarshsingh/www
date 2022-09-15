import type { GetStaticProps, NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '@components/MDX'
import Wrapper from '@components/Wrapper'
import { motion } from 'framer-motion'
import { allInfos } from '@layer/generated'
import { Fade, FadeContainer } from '@anims/index'

const Uses: NextPage<{ uses: { body: { code: string } } }> = ({ uses }) => {
  const Component = useMDXComponent(uses.body.code)

  return (
    <Wrapper
      title='Uses'
      description='A list of hardware and software tools that I use on a daily basis'
    >
      <motion.div
        className='mt-12'
        variants={FadeContainer}
        initial='hidden'
        animate='visible'
      >
        <motion.h1 className='!text-2xl' variants={Fade}>
          Uses
        </motion.h1>
        <motion.p className='my-4 mb-16' variants={Fade}>
          My workspace and tools, the things which foster my productivity.{' '}
          <i>
            Productivity is being able to do things that you were never able to
            do before.
          </i>
        </motion.p>
      </motion.div>
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
