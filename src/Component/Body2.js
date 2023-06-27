import React from 'react'
import './body2.css'

class Body2 extends React.Component {
    render(){
  return (
    <div className='body-img'>
      <div className='heading'>
        <h1>{this.props.heading}</h1>
        <p>{this.props.details} </p>
      </div>
    </div>
  )
    }
}

export default Body2
