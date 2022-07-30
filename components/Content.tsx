import Link from 'next/link'
import { FC, useState } from 'react'
import { FiEye, FiChevronRight } from 'react-icons/fi'
import { useTranslation } from 'next-i18next'
import { format } from 'timeago.js'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import * as A from '@anims/index'
import { allBlogs, Blog } from '@layer/generated'
allBlogs.sort((a, b) => {
  return a.published < b.published ? 1 : -1
})

const Content: FC<{
  data: Blog[]
}> = ({ data }) => {
  const { t } = useTranslation('common')
  const [selected, setSelected] = useState(0)

  return (
    <motion.div
      className='mt-60 flex w-full flex-col'
      variants={A.FadeContainer}
      initial='hidden'
      animate='visible'
    >
      <motion.h1 variants={A.Fade} className='mb-12 text-2xl'>
        {t('blogsHeader')}
      </motion.h1>
      <AnimateSharedLayout>
        {data.map((item, index) => (
          <Post
            item={item}
            key={index}
            onMouseOver={() => setSelected(index + 1)}
            onMouseLeave={() => setSelected(0)}
            isSelected={selected === index + 1}
          />
        ))}
      </AnimateSharedLayout>
      <Link href='/blog' passHref>
        <motion.a
          className='flex items-center text-lg group w-fit mt-10'
          variants={A.Fade}
        >
          {t('viewBlogs')}
          <FiChevronRight className='group-hover:translate-x-1 transition-all ml-1 mt-1' />
        </motion.a>
      </Link>
    </motion.div>
  )
}

const Post: FC<{
  item: Blog
  isSelected: boolean
  onMouseOver: () => void
  onMouseLeave: () => void
}> = ({ item, isSelected, onMouseOver, onMouseLeave }) => {
  return (
    <Link href={`/blog/${item.slug}`} passHref locale={false}>
      <motion.a
        href={`/blog/${item.slug}`}
        className='relative flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer rounded-lg p-5'
        variants={A.Fade}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        <AnimatePresence>
          {isSelected && (
            <motion.div
              layoutId='box'
              className='bg-[#00000010] dark:bg-[#FFFFFF20] rounded-lg w-full h-16 absolute'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 1000,
                damping: 70,
              }}
            />
          )}
        </AnimatePresence>
        <h1 className='!text-lg text-ellipsis ml-5 whitespace-nowrap overflow-hidden w-11/12 sm:w-7/12'>
          {typeof item.title === 'string' && item.title}
        </h1>
        <div className='flex items-center justify-center h-full'>
          <p className='text-gray-500 dark:text-white'>
            {format(item.published)}
            {' · '}
            {Math.trunc(item.readingTime.minutes)}
            {' minute read'}
          </p>
        </div>
      </motion.a>
    </Link>
  )
}

export const Blogs: FC = () => {
  const blogs = allBlogs.slice(0, 5)

  return <Content data={blogs} />
}
