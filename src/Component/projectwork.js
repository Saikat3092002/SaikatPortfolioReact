import React from 'react'
import './projectwork.css'
import snake from '../Images/snake.jpg';
import bike  from '../Images/bike.jpeg'
import iot  from '../Images/iot.jpeg'
import todo from '../Images/todo.webp'
import college from '../Images/college.jpeg'
import portfolio from '../Images/portfolio.webp'
import { NavLink } from 'react-router-dom';

const projectwork = () => {
  return (
    <div className='work-container'>
    <h1 className='Heading'>Project</h1>
    <div className='p-container'>
        <div className='p-card'>
        <img src={portfolio}></img>
        <h2 className='titel'>Portfolio Website</h2>
        <div className='p-details'>
            <p >Using REACT JS </p>
            <div className='p-btn'>
                <NavLink to="" className="btn">View</NavLink>
                <NavLink to="" className="btn">Source Code</NavLink>
            </div>
        </div>
        </div>
        <div className='p-card'>
        <img src={college}></img>
        <h2 className='titel'>HITK College Website</h2>
        <div className='p-details'>
            <p >Using HTML,CSS,JAVASCRIPT </p>
            <div className='p-btn'>
                <NavLink to="" className="btn">View</NavLink>
                <NavLink to="" className="btn">Source Code</NavLink>
            </div>
        </div>
        </div>
        <div className='p-card'>
        <img src={snake}></img>
        <h2 className='titel'>Snakebite Game</h2>
        <div className='p-details'>
            <p >Using HTML,CSS,JAVASCRIPT </p>
            <div className='p-btn'>
                <NavLink to="" className="btn">View</NavLink>
                <NavLink to="" className="btn">Source Code</NavLink>
            </div>
        </div>
        </div>
        <div className='p-card'>
        <img src={bike}></img>
        <h2 className='titel'>Bike Shop Website</h2>
        <div className='p-details'>
            <p >Using HTML,CSS,Bootstrap </p>
            <div className='p-btn'>
                <NavLink to="" className="btn">View</NavLink>
                <NavLink to="" className="btn">Source Code</NavLink>
            </div>
        </div>

        </div>
        <div className='p-card'>
        <img src={todo }></img>
        <h2 className='titel'>Todo Website</h2>
        <div className='p-details'>
            <p >Using HTML,CSS,JAVASCRIPT </p>
            <div className='p-btn'>
                <NavLink to="" className="btn">View</NavLink>
                <NavLink to="" className="btn">Source Code</NavLink>
            </div>
        </div>
        </div>
        <div className='p-card'>
        <img src={iot}></img>
        <h2 className='titel'>Some IOT Project</h2>
        <div className='p-details'>
            <p >IoT based Smart Car Parking,App Based(Blynk IoT) temperature and humidity
monitoring of a room,mplementation of fog based IoT Network for
Temperature and Humidity monitoring system,mplementation of IoT Network using AWS IoT / IBM
Watson / ThingSpeak IoT Platform </p>
       
        </div>

        </div>
        
    </div>
        
      
    </div>
  )
}

export default projectwork
