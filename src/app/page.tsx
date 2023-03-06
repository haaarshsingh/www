import { Layout } from '@components/Layout'
import Home from '@components/Home'
import Photos from '@components/Home/Photos'
import type { NextPage } from 'next'

const Page: NextPage = () => (
  <Layout>
    <Home />
    <Photos />
  </Layout>
)

export default Page
