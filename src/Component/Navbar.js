import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

    const [click,setclick]=useState(false);
   


    const handelclick =()=>{
        setclick(!click);
    }

    const [colour,setcolour]=useState(false);
    const changecolour =()=>
    {
      if(window.scrollY>=100)
      {
        setcolour(true);
      }
      else{
        setcolour(false);
      }
    }

    window.addEventListener("scroll",changecolour);


  return (
    <div className={colour?"header header-bg":"header"}>
      <Link to='/'>
            <h1>Porfolio</h1>
      </Link>
      <ul className={click?"nav-manu active":"nav-manu"} >
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
      
        <li>
            <Link to="/Project">Project</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handelclick} >
      {click ?<FaTimes size={20} style={{color:"#fff"}}/>: <FaBars size={20} style={{color:"#fff"}}/>}
      
       
        
      </div>

    </div>
  )
}

export default Navbar
