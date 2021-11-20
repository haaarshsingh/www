import React from 'react'

import * as S from './Blogs.style'
import BlogCard from './BlogCard'
import * as Icons from 'react-feather'

import { Blog as blogs } from '../../pages/blog/[id]'

const Blog: React.FC<{ blogsData: blogs[] }> = ({ blogsData }) => {
  const InputRef = React.useRef<HTMLInputElement>(null)

  return (
    <S.BlogContainer>
      <S.BlogBox>
        <S.BlogHeader>Harsh's Blog</S.BlogHeader>
        <S.BlogDescription>
          Welcome to my tech blog! It consists mainly of tutorials & my
          experiences trying out new technologies
        </S.BlogDescription>
        <S.SocialsContainer>
          <S.SocialLink href='https://github.com/harshhhdev/' target='_blank'>
            <Icons.GitHub />
          </S.SocialLink>
          <S.SocialLink href='https://twitter.com/harshhhdev/' target='_blank'>
            <Icons.Twitter />
          </S.SocialLink>
          <S.SocialLink href='https://dribbble.com/harshhhdev' target='_blank'>
            <Icons.Dribbble />
          </S.SocialLink>
          <S.SocialLink href='https://dev.to/harshhhdev' target='blank'>
            <Icons.BookOpen />
          </S.SocialLink>
          <S.SocialLink
            href='https://www.linkedin.com/in/harsh-singh-5ba6b31b8/'
            target='blank'
          >
            <Icons.Linkedin />
          </S.SocialLink>
          <S.SocialLink
            href='https://www.youtube.com/channel/UC6ix6gYRC62pM0sMRYKPKUQ'
            target='blank'
          >
            <Icons.Youtube />
          </S.SocialLink>
          <S.SocialLink
            href='https://instagram.com/harshh.singh_'
            target='blank'
          >
            <Icons.Instagram />
          </S.SocialLink>
          <S.SocialLink href='https://t.me/harshhhdev' target='blank'>
            <Icons.Send />
          </S.SocialLink>
        </S.SocialsContainer>
        {blogsData.map((blog, index) => (
          <BlogCard
            index={index}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            readingTime={blog.readingTime}
            formattedDate={blog.formattedDate}
          />
        ))}
      </S.BlogBox>
    </S.BlogContainer>
  )
}

export default Blog
