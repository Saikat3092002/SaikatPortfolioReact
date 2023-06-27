import React from 'react'
import './Footer.css'
import { FaHome, FaPhone,FaMailBulk, FaFacebook, FaInstagram, FaLinkedin  } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
    <div className='left'>
        <div className='location'>
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            
        <div>
            <p>722,Sahid khudiram Bose Sarani Kolkata-700030</p>
        </div>
        </div>
        
        <div className='phone'>
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            91+ 90510 85384
            </h4>
        </div>
        <div className='email'>
        <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            Saikatkarar134@gmail.com
            </h4>
        </div>
    </div>
    <div className='right'>
        <h4>About me</h4>
        <p>This is me Saikat Karar,I am pursuing my B.Tech from Heritage institute of technology.I am in my 4th Year of my B.tech in Computer Science.I already done a internship from Durbin technology.I know C,C++,JAVA,PYTHON,JAVASCRIPT,HTML,CSS,REACT JS.Also I have some knowledge on IoT Devices like Rashberry pi,Arduino,Node MCU and all. </p>
        <div className='social'>
        <FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        <FaInstagram size={20} style={{color:"#fff",marginRight:"2rem"}}/>  
        <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        </div>
    </div>

    </div>
      
    </div>
  )
}

export default Footer
