import React from 'react'
import { getAllStudyIds, getStudiesData } from '../../lib/studies'

import Head from '@components/Head'
import Cursor from '@components/Cursor'
import SmoothScroll from '@components/SmoothScroll'
import Navbar from '@components/Navbar/Navbar'
import Study from '@components/CaseStudy/Study'
import Footer from '@components/Footer/Footer'

import globalStyle from '@css/global.style'
import 'animate.css/animate.min.css'

export type Study = {
  id: string
  title: string
  description: string
  link: string
  contentHtml: string
}

const Blog: React.FC<{ studyData: Study }> = ({ studyData }) => {
  globalStyle()

  return (
    <>
      <Navbar location='studies' />
      <Head
        title={studyData.title}
        description={`Case Study for ${studyData.title}. We'll go over the general planning of this project, and an in-depth view of my thoughts while creating it.`}
      />
      <Cursor />
      <SmoothScroll />
      <Study Content={studyData} />
      <Footer />
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllStudyIds()
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
  const studyData = await getStudiesData(params.id)
  return {
    props: {
      studyData,
    },
  }
}

export default Blog
