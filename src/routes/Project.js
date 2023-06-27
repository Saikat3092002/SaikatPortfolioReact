import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Body2 from '../Component/Body2'
import Price from '../Component/Price'
import Projectcard from '../Component/projectwork'
 
const Project = () => {
  return (
    <div>
   <Navbar/>
   <Body2 heading="My Project" details="I develop various projects using different languages and technologies"/>
      <Projectcard/>
      <Price/>
      
      <Footer/>
      
    </div>
  )
}

export default Project
