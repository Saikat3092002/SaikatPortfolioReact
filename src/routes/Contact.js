import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Body2 from '../Component/Body2'
import Form from '../Component/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Body2 heading="Contact Me" details="Hi,Saikat Here If you need fill free to contact me"/>
      <Form />
      <Footer/>
    </div>
  )
}

export default Contact
