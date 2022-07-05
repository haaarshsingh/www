import { FC } from 'react'
import { FiDribbble, FiGithub, FiTwitter } from 'react-icons/fi'

const Image: FC = () => {
  return (
    <div
      className='w-[1200px] h-[630px] bg-no-repeat flex flex-col justify-between p-12 bg-cover'
      style={{ backgroundImage: `url("/static/BlogBG.jpg")` }}
    >
      <div>
        <h1 className='text-5xl'>
          Fresh: The Next-Gen JavaScript Web Framework
        </h1>
        <p className='text-2xl mt-4'>
          An introduction into Deno's 'fresh' new framework
        </p>
      </div>
      <div className='flex justify-between'>
        <p className='text-2xl text-white'>
          7 minutes • 1364 words • 03 July, 2022
        </p>
        <div className='text-2xl flex items-center'>
          <FiTwitter />
          <FiGithub className='mx-2' />
          <FiDribbble className='mr-2' />
          <p className='text-2xl text-white'>/harshhhdev</p>
        </div>
      </div>
    </div>
  )
}

export default Image
