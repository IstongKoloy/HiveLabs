import React from 'react'
import BgIntro from '../../assets/svg/bg-intro-desktop.svg'
import HeroPhone from '../../assets/img/image-mockups.png'
import './section.css'

const Section = () => {
  return (
    <div className='section hero-section'>
      <div className='hero-content'>
        <h1>Next Generation digital banking</h1>
        <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
        <button className='btn'>Request Invite</button>
      </div>
      <div className='hero-images'>
        {/* <img src={BgIntro} className='hero-bg' alt="" /> */}
        <img src={HeroPhone} className='hero-phone' alt="" />
      </div>
    </div>
  )
}

export default Section
