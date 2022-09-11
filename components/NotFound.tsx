import Link from 'next/link'
import { FC } from 'react'

const NotFound: FC = () => {
  return (
    <div>
      <h1 className='my-20 text-5xl'>Not found.</h1>
      <p>
        <i>
          {'The computer was born to solve problems that did not exist before'}
        </i>
        . If the link is broken, do open an issue at{' '}
        <Link href='https://github.com/harshhhdev/harshhhdev.github.io'>
          harshhhdev/harshhhdev.github.io
        </Link>
        .
      </p>
    </div>
  )
}

export default NotFound
