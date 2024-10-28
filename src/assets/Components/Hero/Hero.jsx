import React from 'react'
import './Hero.css'
import arrow from '../../../assets/arrow.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
      <h1>We Ensure better education for a better world</h1>
      <br />
      <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
      <button>Explore More <img src={arrow} alt=""  className='exp-btn'/></button>
      </div>
     
    </div>
  )
}

export default Hero
