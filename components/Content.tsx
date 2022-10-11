import Link from 'next/link'
import { FC, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import * as A from '@anims/index'
import { allBlogs, Blog } from '@layer/generated'
allBlogs.sort((a, b) => (a.published < b.published ? 1 : -1))

type Talk = {
  title: string
  href: string
  date: string
  event: string
}

const talks: Talk[] = [
  {
    title: 'Building an Accessible Command Menu with React',
    href: 'https://youtu.be/2DL4QC0QrOg',
    date: '09/08',
    event: 'React JAX',
  },
  {
    title: 'Building Serverless Remix Applications with GraphQL and Prisma',
    href: 'https://youtu.be/_Kr-FprQoAI',
    date: '20/06',
    event: 'Remix India',
  },
  {
    title: 'Kubernetes and the Architecture Serverless Databases',
    href: 'https://youtu.be/m2eM-p8zQgM',
    date: '04/05',
    event: 'DoK Community',
  },
  {
    title:
      'Migrating a Serverless PostgreSQL Application to CockroachDB With Zero Downtime',
    href: 'https://youtu.be/U57GDhVEU50',
    date: '29/03',
    event: 'Cockroach Labs',
  },
  {
    title: 'Database Design 101',
    href: 'https://youtu.be/PUfqXnWhwLk',
    date: '31/08',
    event: 'Prisma Meetup',
  },
]

const Content: FC<{
  text: string
  blogs?: Blog[]
  talks?: Talk[]
}> = ({ text, blogs, talks }) => {
  const [hover, setHover] = useState(false)
  const [selected, setSelected] = useState(0)

  return (
    <motion.div
      className='mt-60 flex flex-col relative'
      variants={A.FadeContainer}
      initial='hidden'
      animate='visible'
    >
      <motion.h1 variants={A.Fade} className='ml-3 sm:ml-0 mb-12 text-2xl'>
        {text}
      </motion.h1>
      {blogs && <Map content={blogs} blogs={true} />}
      {talks && <Map content={talks} blogs={false} />}
      <Link
        href={
          blogs
            ? '/blog'
            : 'https://www.youtube.com/channel/UC6ix6gYRC62pM0sMRYKPKUQ'
        }
        passHref
      >
        <motion.a
          className='flex items-center text-BASE group ml-3 sm:ml-0 w-fit mt-10 transition-colors text-white'
          variants={A.Fade}
          rel='noreferrer'
          target={blogs ? '_self' : '_blank'}
        >
          {blogs ? 'All Posts' : 'My Channel'}
          <FiChevronRight className='group-hover:translate-x-1 transition-transform ml-1' />
        </motion.a>
      </Link>
    </motion.div>
  )
}

const Map: FC<{ content: Blog[] | Talk[]; blogs: boolean }> = ({
  content,
  blogs,
}) => {
  const [hover, setHover] = useState(false)
  const [selected, setSelected] = useState(0)

  return (
    <div className='flex flex-col align-center relative'>
      <div
        className='bg-[#FFFFFF20] hidden sm:block rounded-lg w-full h-16 absolute transition-all'
        style={{
          transform: `translateY(${selected * 64 - 64}px)`,
          opacity: hover ? 1 : 0,
        }}
      />
      {blogs
        ? content.map((content, index) => (
            <Post
              blog={content as Blog}
              key={index}
              onMouseOver={() => {
                setHover(true)
                setSelected(index + 1)
              }}
              onMouseLeave={() => setHover(false)}
              isSelected={selected === index}
            />
          ))
        : content.map((content, index) => (
            <Post
              talk={content as Talk}
              key={index}
              onMouseOver={() => {
                setHover(true)
                setSelected(index + 1)
              }}
              onMouseLeave={() => setHover(false)}
              isSelected={selected === index}
            />
          ))}
    </div>
  )
}

const Post: FC<{
  blog?: Blog
  talk?: Talk
  isSelected: boolean
  onMouseOver: () => void
  onMouseLeave: () => void
}> = ({ blog, talk, isSelected, onMouseOver, onMouseLeave }) => {
  return (
    <Link
      href={blog ? `/blog/${blog.slug}` : talk!.href}
      passHref
      locale={false}
    >
      <motion.a
        className='relative flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer rounded-lg p-5'
        variants={A.Fade}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        rel='noreferrer'
        target={blog ? '_self' : '_blank'}
      >
        <h2 className='text-base font-medium text-white text-ellipsis md:ml-0 sm:ml-5 whitespace-nowrap overflow-hidden w-11/12 sm:w-7/12 transition-colors'>
          {blog ? blog.title : talk?.title}
        </h2>
        <div className='flex items-center justify-center h-full'>
          <p className='text-gray-600'>
            {blog
              ? `${Math.round(blog.readingTime.minutes)} minutes`
              : talk?.event}{' '}
            • {blog ? format(new Date(blog.published), 'dd/MM') : talk?.date}
          </p>
        </div>
      </motion.a>
    </Link>
  )
}

export const Blogs: FC = () => {
  const blogs = allBlogs.slice(0, 5)

  return (
    <>
      <Content text='Writing' blogs={blogs} />
      <Content text='Speaking' talks={talks} />
    </>
  )
}
