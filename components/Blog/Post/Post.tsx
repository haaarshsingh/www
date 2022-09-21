import { Blog } from '@layer/generated'
import { FC } from 'react'
import { useScroll, useSpring } from 'framer-motion'
import { FiClock, FiEdit2 } from 'react-icons/fi'
import { format } from 'date-fns'
import * as S from './Post.style'

const Post: FC<{ blog: Blog }> = ({ blog }) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <S.Wrapper>
      <S.Progress style={{ scaleX }} />
      <S.Title>{blog.title}</S.Title>
      <S.Container>
        <p>{format(Date.parse(blog.published), 'dd MMMM, yyyy')}</p>
        <S.RightContainer>
          <div>
            <FiClock />
            {Math.trunc(blog.readingTime.minutes)}
            {Math.trunc(blog.readingTime.minutes) === 1
              ? ' minute'
              : ' minutes'}
          </div>
          <div>
            <FiEdit2 />
            {blog.wordCount} words
          </div>
        </S.RightContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default Post
