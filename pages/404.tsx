import React from 'react'

import Head from './../components/Head'
import Cursor from './../components/Cursor'
import SmoothScroll from './../components/SmoothScroll'
import Navbar from './../components/Navbar/Navbar'
import ErrorPage from './../components/404/404'
import Footer from './../components/Footer/Footer'

import globalStyle from './../styles/global.style'
import 'animate.css/animate.min.css'
import { ContentWrapper } from './../styles/theme.config'

const Home: React.FC = () => {
  globalStyle()

  return (
    <ContentWrapper>
      <Navbar location="404" />
      <Head title="404" />
      <Cursor />
      <SmoothScroll />
      <ErrorPage />
      <Footer />
    </ContentWrapper>
  )
}

export default Home
