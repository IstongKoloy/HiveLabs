import React from 'react'
import './whychoose.css'
import OnlineBanking from '../../assets/svg/icon-online.svg'
import Budgeting from '../../assets/svg/icon-budgeting.svg'
import Onboarding from '../../assets/svg/icon-onboarding.svg'
import OpenAPI from '../../assets/svg/icon-api.svg'

const WhyChoose = () => {
  return (
    <div className='whychoose section'>
        <div className='whychoose-header'>
            <h1>Why choose Easybank?</h1>
            <p>We leverage Open Banking to turn your bank account into your financial hub.<br />
            Control your finances like never before.</p>
        </div>
        <div className='whychoose-content'>
            <div className='whychoose-benefits'>
                <div className='benefits-icon'>
                    <img src={OnlineBanking} alt="Online Banking" />
                </div>
                <div className='benefits-title'>
                    <span>Online banking</span>
                </div>
                <div className='benefits-desc'>
                    <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
            </div>
            <div className='whychoose-benefits'>
                <div className='benefits-icon'>
                    <img src={Budgeting} alt="Online Banking" />
                </div>
                <div className='benefits-title'>
                    <span>Simple Budgeting</span>
                </div>
                <div className='benefits-desc'>
                    <p>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
                </div>
            </div>
            <div className='whychoose-benefits'>
                <div className='benefits-icon'>
                    <img src={Onboarding} alt="Online Banking" />
                </div>
                <div className='benefits-title'>
                    <span>Fast Onboarding</span>
                </div>
                <div className='benefits-desc'>
                    <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
            </div>
            <div className='whychoose-benefits'>
                <div className='benefits-icon'>
                    <img src={OpenAPI} alt="Online Banking" />
                </div>
                <div className='benefits-title'>
                    <span>Open API</span>
                </div>
                <div className='benefits-desc'>
                    <p>Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose
