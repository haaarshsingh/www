import type { NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import Music from '@components/Music'

const Dashboard: NextPage = () => {
  return (
    <Wrapper
      title='Music'
      description='The music I listen to, fetched periodically from Spotify.'
    >
      <Music />
    </Wrapper>
  )
}

export default Dashboard
