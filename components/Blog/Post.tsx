import { Blog } from '@layer/generated'
import { FC } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FiClock, FiEdit2 } from 'react-icons/fi'
import { format } from 'date-fns'

const Post: FC<{ blog: Blog }> = ({ blog }) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className='mt-16'>
      <motion.div
        className='fixed top-0 left-0 right-0 h-1 bg-white origin-[0%] z-50'
        style={{ scaleX }}
      />
      <h1 className='!text-lg'>{blog.title}</h1>
      <div className='flex justify-between mt-2 mb-16'>
        <p className='text-base'>
          {format(Date.parse(blog.published), 'dd MMMM, yyyy')}
        </p>
        <div className='flex'>
          <div className='text-base flex justify-center items-center text-gray-400'>
            <FiClock className='mr-2' />
            {Math.trunc(blog.readingTime.minutes)}
            {Math.trunc(blog.readingTime.minutes) === 1
              ? ' minute'
              : ' minutes'}
          </div>
          <div className='text-base flex items-center justify-center ml-5 text-gray-400'>
            <FiEdit2 className='mr-2 text-lg sm:text-xl' />
            {blog.wordCount} words
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
