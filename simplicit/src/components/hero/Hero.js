import React from 'react'
import '../hero/Hero.css' 
//import dark_arrow from '../../assets/dark-arrow.png';


const Hero = () => {
  return (
    <div className='Hero'>
        <div className='hero-text'>

            <h1>We ensure education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students
                with knowledge, skills, and experience need to excel in the dynamic
                field of education.
            </p>
            <button className='btn'> Explore More...</button>

        </div>
    </div>
  ) 
}

export default Hero