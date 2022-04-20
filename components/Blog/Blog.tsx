import Header from '@components/Header'
import { format } from 'date-fns'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Blog as BlogProps } from '@layer/generated/types'
import { allBlogs } from '@layer/generated'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { FastFadeContainer, FadeContainer, Fade } from '@anims/index'

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
          ? 'bg-gray-900 dark:bg-gray-100 hover:bg-gray-700 dark:hover:bg-gray-300 text-gray-100 dark:text-gray-900'
          : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
      }`}
      onClick={() => (active ? setActiveTag('') : setActiveTag(text))}
      variants={Fade}
    >
      {text}
    </motion.button>
  )
}

const Post: FC<BlogProps> = ({ slug, title, tags, published }) => {
  return (
    <Link href={`/blog/${slug}`} passHref locale={false}>
      <motion.a className={tags} variants={Fade}>
        <div
          className='h-96 bg-cover bg-no-repeat bg-center rounded-2xl ring-gray-100 dark:ring-gray-900 ring hover:ring-offset-8 border-none ring-offset-gray-100 dark:ring-offset-gray-900 hover:ring-gray-900 dark:hover:ring-white transition-all'
          style={{ backgroundImage: `url("/static/${slug}.jpg")` }}
        />
        <h1 className='mt-5 text-white'>{title}</h1>
        <p className='text-2xl mt-3'>
          {format(Date.parse(published), 'dd MMMM, yyyy')}
        </p>
      </motion.a>
    </Link>
  )
}

const Blog: FC = () => {
  const topics = [
    'React',
    'UI/UX',
    'Next',
    'Vercel',
    'CockroachDB',
    'Prisma',
    'Databases',
    'Figma',
    'Design',
    'TypeScript',
    'CSS',
    'GraphQL',
    'serverless',
    'PlanetScale',
    'SQL',
    'Productivity',
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
        className='grid grid-rows-auto grid-cols-2 sm:grid-rows-4 sm:grid-cols-4 gap-3 mt-6'
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
        className='grid grid-rows-auto sm:grid-cols-2 gap-10 mt-24'
      >
        {filteredPosts!.map((blog, index) => (
          <Post {...blog} key={index} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Blog
