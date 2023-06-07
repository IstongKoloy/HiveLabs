import React from 'react'
import './footer.css'
import FooterLogo from '../../assets/svg/logo-white.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={FooterLogo} alt="" />
            <ul className='footer-socials'>
                <li>
                    <a href="#">
                        <i className="bi bi-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-youtube"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-pinterest"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div className='footer-links'>
            <div className='links'>
                <ul className='links-list'>
                    <li className='lists'><a href="#">About Us</a></li>
                    <li className='lists'><a href="#">Contact</a></li>
                    <li className='lists'><a href="#">Blog</a></li>
                </ul>
                <ul className='links-list'>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <div className='copyrights'>
            <button className='btn'>Request Invite</button>
            <span><box-icon name='copyright' />Easybank. All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer
