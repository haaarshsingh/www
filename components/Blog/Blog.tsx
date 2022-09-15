import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Blog as BlogProps } from '@layer/generated/types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Fade, FastFadeContainer } from '@anims/index'
import { format } from 'date-fns'
import { allBlogs } from '@layer/generated'
allBlogs.sort((a, b) => (a.published < b.published ? 1 : -1))

const Post: FC<{
  blog: BlogProps
  active: boolean
  index: number
  setIndex: Dispatch<SetStateAction<number>>
  maxIndex: number
}> = ({ blog, active, index, setIndex, maxIndex }) => {
  return (
    <Link href={`/blog/${blog.slug}`} passHref locale={false}>
      <motion.a
        className={`flex items-center justify-between w-full py-5 ${
          index !== maxIndex ? 'border-b-gray-700 border-b-solid border-b' : ''
        }`}
        variants={Fade}
        onMouseMove={() => setIndex(index)}
        onMouseLeave={() => setIndex(-1)}
      >
        <h2
          className='text-white text-base font-medium w-3/4 text-ellipsis overflow-hidden whitespace-nowrap transition-colors'
          style={{
            color: active ? '#FFFFFF' : '#444444',
          }}
        >
          {blog.title}
        </h2>
        <p
          className='hidden sm:block text-base transition-colors'
          style={{ color: active ? '#6E6E6E' : '#444444' }}
        >
          {Math.round(blog.readingTime.minutes)} minutes •{' '}
          {format(new Date(blog.published), 'dd/MM')}
        </p>
        <p className='block sm:hidden'>
          {format(new Date(blog.published), 'dd/MM')}
        </p>
      </motion.a>
    </Link>
  )
}

const Blog: FC = () => {
  const [index, setIndex] = useState(-1)

  const filtered = allBlogs.reduce((group: any, post) => {
    const { published } = post
    const year = published.substring(0, 4)
    group[year] = group[year] ?? []
    group[year].push(post)
    return group
  }, {})

  const data = [
    {
      year: '2022',
      increment: 0,
      data: filtered['2022'],
    },
    {
      year: '2021',
      increment: filtered['2022'].length,
      data: filtered['2021'],
    },
    {
      year: '2020',
      increment: filtered['2022'].length + filtered['2021'].length,
      data: filtered['2020'],
    },
  ]

  return (
    <motion.div
      className='w-full'
      variants={FastFadeContainer}
      initial='hidden'
      animate='visible'
    >
      <div className='mt-12'>
        <motion.h1 className='!text-2xl' variants={Fade}>
          Blog
        </motion.h1>
        <motion.p variants={Fade} className='my-4 mb-16'>
          <i>Writing software, and then teaching others.</i> Thoughts and
          tutorials on everything from design to databases. Read by{' '}
          <span className='text-gray-400'>99,013</span> people till date. Join{' '}
          <span className='text-gray-400'>1,273</span> others and follow my blog
          on{' '}
          <a href='https://dev.to/harshhhdev' rel='noreferrer' target='_blank'>
            Dev
          </a>
          .
        </motion.p>
      </div>
      {data.map((d, i) => (
        <div className='flex border-t-gray-700 border-t-solid border-t' key={i}>
          <motion.h2
            className='hidden sm:block mt-5 text-lg mr-16 ml-4 text-gray-600 w-fit'
            variants={Fade}
          >
            {d.year}
          </motion.h2>
          <div className='flex flex-col w-full'>
            {d.data.map((blog: BlogProps, idx: number) => (
              <Post
                blog={blog}
                active={index === idx + d.increment || index === -1}
                index={idx + d.increment}
                setIndex={setIndex}
                key={idx}
                maxIndex={d.data.length}
              />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default Blog
