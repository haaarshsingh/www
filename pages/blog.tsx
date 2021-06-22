import React from 'react'

import { getSortedBlogsData } from './../lib/blogs'
import { Blog as blog } from './blog/[id]'

import Head from './../components/Head'
import Cursor from './../components/Cursor'
import SmoothScroll from './../components/SmoothScroll'
import Navbar from './../components/Navbar/Navbar'
import BlogCards from './../components/Blogs/Blogs'
import Footer from './../components/Footer/Footer'

import globalStyle from './../styles/global.style'
import 'animate.css/animate.min.css'

const Blog: React.FC<{ allBlogsData: blog[] }> = ({ allBlogsData }) => {
  globalStyle()

  return (
    <>
      <Navbar location="blog" />
      <Head
        title="Blog"
        description="👋 Hello. Welcome to my blog - Here, I'll write tutorials, and share my expriences on a wide variety of technologies."
      />
      <Cursor />
      <SmoothScroll />
      <BlogCards blogsData={allBlogsData} />
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const allBlogsData = getSortedBlogsData()
  return {
    props: {
      allBlogsData,
    },
  }
}

export default Blog
