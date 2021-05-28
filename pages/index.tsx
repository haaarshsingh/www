import React from 'react'

import Head from './../components/Head'
import Cursor from './../components/Cursor'
import Navbar from './../components/Navbar/Navbar'
import HomeComponent from './../components/Home/Home'
import AboutComponent from './../components/About/About'
import WorkComponent from './../components/Work/Work'
import ProjectsComponent from './../components/Projects/Projects'
import DesignsComponent from './../components/Designing/Designs'
import ContactComponent from './../components/Contact/Contact'
import Footer from './../components/Footer/Footer'

import globalStyle from './../styles/global.style'
import 'animate.css/animate.min.css'

const Home: React.FC = () => {
  globalStyle()

  return (
    <>
      <Navbar location="portfolio" />
      <Head title="Home" />
      <HomeComponent />
      <AboutComponent />
      <WorkComponent />
      <ProjectsComponent />
      <DesignsComponent />
      <ContactComponent />
      <Footer />
      <Cursor />
    </>
  )
}

export default Home
