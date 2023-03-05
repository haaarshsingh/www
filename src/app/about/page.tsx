import { Wrapper } from '@components/Layout'
import About from '@components/About'
import styles from '@css/common.module.css'
import { NextPage } from 'next'

const Page: NextPage = () => (
  <Wrapper>
    <About />
  </Wrapper>
)

export default Page
