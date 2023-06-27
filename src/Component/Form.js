import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className='body'>
    <div className='form'>
    <form>
        <label>Your Name:</label>
        <input type="text"></input>
        <label>Your Email:</label>
        <input type="text"></input>
        <label>Your contact No:</label>
        <input type="text"></input>
        <label>Subject:</label>
        <input type="text"></input>
        <label>Massage:</label>
        <textarea rows="6" placeholder='Type your Message here'></textarea>
        <button className='btn'>Submit</button>
        
    </form>
      
    </div>
    <div className='loc'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.132938809767!2d88.39712636496026!3d22.611510385162777
    !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dffe39be86b%3A0xf6af2002115eddaa!2sKalindi%20Housing%20Estate%2C%20
    South%20Dumdum%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1687813436001!5m2!1sen!2sin" 
    style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}

export default Form
