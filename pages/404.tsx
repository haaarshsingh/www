import { NextPage } from 'next'
import NotFoundComponent from '@components/NotFound'
import Head from 'next/head'

const NotFound: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Not Found.</title>
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>'
        />
      </Head>
      <div className='flex flex-col items-center'>
        <div className='w-95 lg:w-60 2xl:w-40 xl:w-30 mt-10'>
          <NotFoundComponent />
        </div>
      </div>
    </div>
  )
}

export default NotFound
