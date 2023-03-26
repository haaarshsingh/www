import { BlogLayout } from '@components/Layout'
import Writing from '@components/Writing'
import type { NextPage } from 'next'

const Page: NextPage = () => (
  <BlogLayout>
    <Writing />
  </BlogLayout>
)

export default Page
