import { format } from 'date-fns'
import { FC } from 'react'
import { SiGithub, SiTwitter } from 'react-icons/si'

const Footer: FC = () => {
  return (
    <footer className='flex flex-col justify-center items-center'>
      <hr className='mt-40 w-1/6 border-gray-700' />
      <div className='mt-10 w-2/3 mb-20 text-center'>
        <p className='text-sm mb-5 text-white'>
          Happy {format(new Date(2020, 1, 10), 'EEEE')} ✌️
        </p>
        <div className='flex items-center justify-center'>
          <a
            href='https://twitter.com/harshhhdev'
            target='_blank'
            rel='noreferrer'
            className='hover:text-gray-600'
          >
            <SiTwitter className='text-lg mr-2' aria-label='Twitter icon' />
          </a>
          <a
            href='https://github.com/harshhhdev'
            target='_blank'
            rel='noreferrer'
            className='hover:text-gray-600'
          >
            <SiGithub className='text-lg ml-2' aria-label='GitHub icon' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
