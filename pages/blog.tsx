import React from 'react'

import { getSortedBlogsData } from './../lib/blogs'
import { Blog as blog } from './blog/[id]'

import Head from './../components/Head'
import Cursor from './../components/Cursor'
import Navbar from './../components/Navbar/Navbar'
import BlogCards from './../components/Blogs/Blogs'
import Footer from './../components/Footer/Footer'

import globalStyle from './../styles/global.style'
import 'animate.css/animate.min.css'

const Blog: React.FC<{ allBlogsData: blog[] }> = ({ allBlogsData }) => {
  globalStyle()

  return (
    <>
      <Head title="Blog" />
      <Cursor />
      <Navbar location="blog" />
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
