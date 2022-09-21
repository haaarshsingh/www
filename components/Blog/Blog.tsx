import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Blog as BlogProps } from '@layer/generated/types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Fade, FastFadeContainer } from '@anims/index'
import { format } from 'date-fns'
import * as S from './Blog.style'
import { Content } from '../Music/Music.style'
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
      <S.Blog
        last={index !== maxIndex}
        variants={Fade}
        onMouseMove={() => setIndex(index)}
        onMouseLeave={() => setIndex(-1)}
      >
        <Content blog active={active}>
          {blog.title}
        </Content>
        <Content hide info activeLight={active}>
          {Math.round(blog.readingTime.minutes)} minutes •{' '}
          {format(new Date(blog.published), 'dd/MM')}
        </Content>
        <Content show>{format(new Date(blog.published), 'dd/MM')}</Content>
      </S.Blog>
    </Link>
  )
}

const Blog: FC<{ followers: string; views: string }> = ({
  followers,
  views,
}) => {
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
    <S.Wrapper variants={FastFadeContainer} initial='hidden' animate='visible'>
      <S.HeaderContainer>
        <motion.h1 variants={Fade}>Blog</motion.h1>
        <S.Description variants={Fade}>
          <i>Writing software, and then teaching others.</i> Thoughts and
          tutorials on everything from design to databases. Read by{' '}
          <span>{parseInt(views).toLocaleString()}</span> people till date. Join{' '}
          <span>{parseInt(followers).toLocaleString()}</span> others and follow
          my blog on{' '}
          <a href='https://dev.to/harshhhdev' rel='noreferrer' target='_blank'>
            Dev
          </a>
          .
        </S.Description>
      </S.HeaderContainer>
      {data.map((d, i) => (
        <S.Container key={i}>
          <S.Year variants={Fade}>{d.year}</S.Year>
          <S.BlogWrapper>
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
          </S.BlogWrapper>
        </S.Container>
      ))}
    </S.Wrapper>
  )
}

export default Blog
