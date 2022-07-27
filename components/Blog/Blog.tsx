import Header from '@components/Header'
import { format } from 'date-fns'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Blog as BlogProps } from '@layer/generated/types'
import { allBlogs } from '@layer/generated'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import {
  FastFadeContainer,
  FadeContainer,
  Fade,
  TopicsFade,
} from '@anims/index'
import { FiDribbble, FiGithub, FiTwitter } from 'react-icons/fi'
import Image from './Image'

allBlogs.sort((a, b) => {
  return a.published < b.published ? 1 : -1
})

const filter = (query: string) => {
  if (!query) return allBlogs

  return allBlogs.filter((blog: BlogProps) => {
    const tags = blog.tags.toLowerCase()
    return tags.includes(query.toLowerCase())
  })
}

const Topic: FC<{
  text: string
  activeTag: string
  setActiveTag: Dispatch<SetStateAction<string>>
}> = ({ text, activeTag, setActiveTag }) => {
  const [active, setActive] = useState(activeTag === text)

  useEffect(() => {
    if (activeTag === text) setActive(true)
    else setActive(false)
  }, [setActive, activeTag, text])

  return (
    <motion.button
      className={`text-lg p-3 rounded-full flex justify-center align-center transition-all ${
        active
          ? 'from-gradient-100 to-gradient-200 bg-gradient-to-r hover:bg-gray-700 text-white dark:hover:bg-gray-300'
          : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-gray-700'
      }`}
      onClick={() => (active ? setActiveTag('') : setActiveTag(text))}
      variants={TopicsFade}
    >
      {text}
    </motion.button>
  )
}

const Post: FC<BlogProps> = ({
  slug,
  title,
  tags,
  description,
  published,
  readingTime,
}) => {
  return (
    <Link href={`/blog/${slug}`} passHref locale={false}>
      <motion.a
        className={`${tags} my-5 hover:bg-gray-200 dark:hover:bg-gray-800 p-7 rounded-lg transition-all`}
        variants={Fade}
      >
        <h1 className='text-gray-900 dark:text-white text-2xl'>{title}</h1>
        <p className='text-lg mt-3 text-gray-300'>{description}</p>
        <div className='flex'>
          <p className='text-lg mt-3 text-gray-500'>
            {Math.round(readingTime.minutes)} minutes • {readingTime.words}{' '}
            words • {format(Date.parse(published), 'dd MMMM, yyyy')}
          </p>
        </div>
      </motion.a>
    </Link>
  )
}

const Blog: FC = () => {
  const topics = [
    'React',
    'UI/UX',
    'Next.js',
    'Vercel',
    'Databases',
    'Figma',
    'Design',
    'TypeScript',
    'CSS',
    'GraphQL',
    'serverless',
    'SQL',
  ]
  const [active, setActive] = useState('')
  const filteredPosts = filter(active)

  const { t } = useTranslation('common')

  return (
    <motion.div className='w-full' initial='hidden' animate='visible'>
      <Header head={t('blogHeader')} bio={t('blogBio')} />
      <motion.h1 variants={Fade} className='mt-6 text-bold text-2xl'>
        Search blog by topic
      </motion.h1>
      <motion.div
        variants={FastFadeContainer}
        initial='hidden'
        animate='visible'
        className='grid grid-rows-auto grid-cols-2 sm:grid-rows-3 sm:grid-cols-4 gap-3 mt-6'
      >
        {topics.map((topic, index) => (
          <Topic
            text={topic}
            activeTag={active}
            setActiveTag={setActive}
            key={index}
          />
        ))}
      </motion.div>
      <motion.div
        variants={FadeContainer}
        initial='hidden'
        animate='visible'
        className='flex flex-col mt-10'
      >
        {filteredPosts!.map((blog, index) => (
          <Post {...blog} key={index} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Blog
