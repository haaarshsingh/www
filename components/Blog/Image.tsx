import { FC } from 'react'
import { FiDribbble, FiGithub, FiTwitter } from 'react-icons/fi'

type ImageProps = {
  title: string
  description: string
  readingTime: number
  words: number
  date: string
}

const Image: FC<ImageProps> = ({
  title,
  description,
  readingTime,
  words,
  date,
}) => {
  return (
    <div
      className='w-[1200px] h-[630px] bg-no-repeat flex flex-col justify-between p-12 bg-cover'
      style={{ backgroundImage: `url("/static/BlogBG.jpg")` }}
    >
      <div>
        <h1 className='text-5xl'>{title}</h1>
        <p className='text-2xl mt-4'>{description}</p>
      </div>
      <div className='flex justify-between'>
        <p className='text-2xl text-white'>
          {readingTime} minutes • {words} words • {date}
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
