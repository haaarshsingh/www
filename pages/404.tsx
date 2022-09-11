import { NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import NotFoundComponent from '@components/NotFound'

const NotFound: NextPage = () => {
  return (
    <Wrapper title='Another Boring 404' description="There's nothing here!">
      <NotFoundComponent />
    </Wrapper>
  )
}

export default NotFound
