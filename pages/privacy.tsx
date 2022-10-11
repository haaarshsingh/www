import { GetStaticProps, NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '@components/MDX'
import Wrapper from '@components/Wrapper'
import Header from '@components/Header'
import { allInfos } from '@layer/generated'

const Privacy: NextPage<{ privacy: { body: { code: string } } }> = ({
  privacy,
}) => {
  const Component = useMDXComponent(privacy.body.code)

  return (
    <Wrapper
      title='Privacy'
      description="Privacy policy and terms for any projects made under this domain. TLDR; I don't care about your data enough to sell it to companies. Just please don't do act like a doofus."
    >
      <Header head='' bio='' />
      <div className='blog'>
        <Component components={components} />
      </div>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const privacy = allInfos.find(
    (page: { slug: string }) => page.slug === 'privacy'
  )!

  return {
    props: { privacy },
  }
}

export default Privacy
