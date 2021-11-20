import React from 'react'

import * as S from './Blogs.style'
import * as Icons from 'react-feather'

type Blog = {
  index: number
  id: string
  title: string
  description: string
  readingTime: number
  formattedDate: string
}

const Blog: React.FC<Blog> = ({
  index,
  id,
  title,
  description,
  readingTime,
  formattedDate,
}) => {
  return (
    <S.BlogCard key={index}>
      <S.BlogCardTitle href={`/blog/${id}`} id='title'>
        {title}
      </S.BlogCardTitle>
      <S.BlogCardDesc>{description}</S.BlogCardDesc>
      <S.BlogInfoBottom>
        <S.BlogInfoContainer>
          <Icons.Clock />
          {readingTime} min
        </S.BlogInfoContainer>
        <S.BlogInfoContainer>
          <Icons.Calendar />
          {formattedDate}
        </S.BlogInfoContainer>
      </S.BlogInfoBottom>
    </S.BlogCard>
  )
}

export default Blog
