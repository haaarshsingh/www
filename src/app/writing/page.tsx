import { BlogLayout } from '@components/Layout'
import Writing from '@components/Writing'
import type { NextPage } from 'next'

export const metadata = { title: 'Writing' }

const Page: NextPage = () => (
  <BlogLayout>
    <Writing />
  </BlogLayout>
)

export default Page
