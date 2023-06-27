import React from 'react'

import Bg from '../Images/bg.avif'
import { Link } from 'react-router-dom'
import './body.css'

const body = () => {
  return (
    <div className='body'>
    <div className='img'>
      <img className='bg-img' src={Bg}/>
    </div>
    <div className='content'>
      <p>HII, MYSELF SAIKAT  HERE...</p>
      <h1>I AM A DEVELOPER</h1>
      <div>
        <Link to="/project" className='btn'>Project</Link>
        <Link to="/Contact" className=' btn btn-light'>Contact</Link>
      </div>
    </div>

    </div>
  )
}

export default body
