import React from 'react'
import { getAllBlogIds, getBlogData } from './../../lib/blogs'

import Head from './../../components/Head'
import Cursor from './../../components/Cursor'
import SmoothScroll from './../../components/SmoothScroll'
import Navbar from './../../components/Navbar/Navbar'
import BlogPost from './../../components/BlogPost/BlogPost'
import Footer from './../../components/Footer/Footer'

import globalStyle from './../../styles/global.style'
import 'animate.css/animate.min.css'

export interface Blog {
  id: string
  title: string
  date: string
  formattedDate: string
  readingTime: number
  description: string
  contentHtml: string
  language: string
}

const Blog: React.FC<{ blogData: Blog }> = ({ blogData }) => {
  globalStyle()

  return (
    <>
      <Navbar location="blog" />
      <Head title={blogData.title} description={blogData.description} />
      <Cursor />
      <SmoothScroll />
      <BlogPost BlogContent={blogData} />
      <Footer />
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllBlogIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { id: string }
}) => {
  const blogData = await getBlogData(params.id)
  return {
    props: {
      blogData,
    },
  }
}

export default Blog
