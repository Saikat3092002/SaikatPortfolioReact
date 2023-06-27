import React from 'react'
import { Link } from 'react-router-dom'
import me from '../Images/saikat.jpg'
import './Aboutbody.css'

const Aboutbody = () => {
  return (
    <div className='about'>
    <div className='left'>
        <h1>Who Am I?</h1>
        <p>This is me Saikat Karar,I am pursuing my B.Tech from Heritage institute of technology.I am in my 4th Year of my B.tech in Computer Science.I already done a internship from Durbin technology.I know C,C++,JAVA,PYTHON,JAVASCRIPT,
        HTML,CSS,REACT JS.Also I have some knowledge on IoT Devices like Rashberry pi,Arduino,Node MCU and all. </p>
        <Link to="./Contact">
        <button className='btn'>Contact me</button>
        </Link>
    </div>
    <div className='right'>
        <img src={me}></img>
       
    </div>
      
    </div>
  )
}

export default Aboutbody
