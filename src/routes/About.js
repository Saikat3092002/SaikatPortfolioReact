import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Body2 from '../Component/Body2'
import Aboutbody from '../Component/Aboutbody'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Body2 heading="About Me" details="Here is some Details about my Education and Skills"/>
      <Aboutbody/>
      <Footer/>
    </div>
  )
}

export default About
