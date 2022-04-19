import Link from 'next/link'
import { FC } from 'react'
import { FiEye, FiChevronRight } from 'react-icons/fi'
import { useTranslation } from 'next-i18next'
import { format } from 'timeago.js'
import { motion } from 'framer-motion'
import * as A from '@anims/index'
import { allBlogs, Blog } from '@layer/generated'
allBlogs.sort((a, b) => {
  return a.published < b.published ? 1 : -1
})

const Content: FC<{
  data: Blog[]
}> = ({ data }) => {
  const { t } = useTranslation('common')

  return (
    <motion.div
      className='mt-60 flex w-full flex-col'
      variants={A.FadeContainer}
      initial='hidden'
      animate='visible'
    >
      <motion.h1 variants={A.Fade} className='mb-12'>
        {t('blogsHeader')}
      </motion.h1>
      {data.map((item, index) => (
        <Link href={`/blog/${item.slug}`} key={index} passHref locale={false}>
          <motion.a
            href={`/blog/${item.slug}`}
            className='flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer rounded-lg p-5 hover:bg-gray-200 dark:hover:bg-gray-700'
            variants={A.Fade}
          >
            <h1 className='text-xl text-ellipsis whitespace-nowrap overflow-hidden w-11/12 sm:w-2/3'>
              {typeof item.title === 'string' && item.title}
            </h1>
            <div className='flex items-center justify-center h-full'>
              <p className='text-gray-500 dark:text-white'>
                {format(item.published)}
                {' · '}
                {Math.trunc(item.readingTime.minutes)}
                {' minute read'}
              </p>
              <div className='flex text-white'></div>
            </div>
          </motion.a>
        </Link>
      ))}
      <Link href='/blog' passHref>
        <motion.a
          className='flex items-center text-xl group w-fit mt-10'
          variants={A.Fade}
        >
          {t('viewBlogs')}
          <FiChevronRight className='group-hover:translate-x-1 transition-all ml-1 mt-1' />
        </motion.a>
      </Link>
    </motion.div>
  )
}

export const Blogs: FC = () => {
  const blogs = allBlogs.slice(0, 5)

  return <Content data={blogs} />
}
