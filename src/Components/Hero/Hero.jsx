import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/prof.jpeg'
import './Hero.css'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Prince Mishra</span></h1>
      <p>I am a full stack developer(Mobile & Websites) from india with 2 years of experience .</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"  ><a href="https://drive.google.com/file/d/1905xPgy8K-pPnFqwB2C97ePaUN6uC5Hz/view?usp=sharing">My Resume </a></div>
      </div>
    </div>
  )
}

export default Hero
