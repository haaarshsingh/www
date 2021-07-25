import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './Blogs.style'
import * as Icons from 'react-feather'

import { Blog as blogs } from '../../pages/blog/[id]'

const Blog: React.FC<{ blogsData: blogs[] }> = ({ blogsData }) => {
  const InputRef = React.useRef<HTMLInputElement>(null)

  const Search = () => {
    const BlogCards: any = document.querySelectorAll('div.blog-card')
    for (let i = 0; i < BlogCards.length; i++) {
      const Header = BlogCards[i].querySelector('a#title')

      if (
        Header.innerHTML
          .toUpperCase()
          .indexOf(InputRef.current!.value.toUpperCase()) > -1
      ) {
        BlogCards[i].style.display = 'flex'
      } else BlogCards[i].style.display = 'none'
    }
  }

  return (
    <S.BlogContainer>
      <S.BlogContainerBox>
        <S.Searchbar
          type='text'
          ref={InputRef}
          onKeyUp={Search}
          placeholder='Search Blogs...'
        />
        <S.BlogsBox>
          {blogsData.map((blog, index) => (
            <ScrollAnimation
              animateIn='animate__flipInX'
              animateOnce={true}
              delay={200}
              key={index}
            >
              <S.BlogCard key={index} className='blog-card'>
                <S.BlogCardTitle href={`/blog/${blog.id}`} id='title'>
                  {blog.title}
                </S.BlogCardTitle>
                <S.BlogCardDesc>{blog.description}</S.BlogCardDesc>
                <S.BlogInfoBottom>
                  <S.BlogInfoContainer>
                    <Icons.Clock />
                    {blog.readingTime} min
                  </S.BlogInfoContainer>
                  <S.BlogInfoContainer>
                    <Icons.Calendar />
                    {blog.formattedDate}
                  </S.BlogInfoContainer>
                </S.BlogInfoBottom>
              </S.BlogCard>
            </ScrollAnimation>
          ))}
        </S.BlogsBox>
      </S.BlogContainerBox>
    </S.BlogContainer>
  )
}

export default Blog
