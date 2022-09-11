import type { NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import Music from '@components/Music'

const Dashboard: NextPage = () => {
  return (
    <Wrapper
      title='Music'
      description='Just a bunch of random statistics about me from several different APIs. Let me know if you have any ideas!'
    >
      <Music />
    </Wrapper>
  )
}

export default Dashboard
