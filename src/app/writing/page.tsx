import { BlogLayout } from '@components/Layout'
import Writing from '@components/Writing'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <BlogLayout>
      <Writing />
    </BlogLayout>
  )
}

export default Page
