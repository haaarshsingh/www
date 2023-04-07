import 'mapbox-gl/dist/mapbox-gl.css'
import { Layout } from '@components/Layout'
import About from '@components/About'
import type { NextPage } from 'next'

export const metadata = { title: 'About' }

const Page: NextPage = () => (
  <Layout>
    <About />
  </Layout>
)

export default Page
