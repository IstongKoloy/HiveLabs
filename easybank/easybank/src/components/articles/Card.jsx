import React from 'react'
import './articles.css'
import Confetti from '../../assets/img/image-confetti.jpg'
import Currency from '../../assets/img/image-currency.jpg'
import Plane from '../../assets/img/image-plane.jpg'
import Restaurant from '../../assets/img/image-restaurant.jpg'

const Card = () => {
    const data = [
        {
            id: 1,
            img: Currency,
            author: "Michael Jackson",
            title: "Receive money in any currency with no fees",
            desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
        },
        {
            id: 2,
            img: Restaurant,
            author: "Whitney Houston",
            title: "Treat yourself without worrying about money",
            desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
        },
        {
            id: 3,
            img: Plane,
            author: "John Doe",
            title: "Take your Easybank card wherever you go",
            desc: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
        },
        {
            id: 4,
            img: Confetti,
            author: "William Doe",
            title: "Our invite-only Beta accounts are now live!",
            desc: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's eaty to request an invite through the site...",
        },
    ]
  return (
    <>
        {data.map( (item, index) => (
            <div className='card' key={index}>
                <div className='card-img'>
                    <img src={item.img} alt="" />
                </div>  
                <div className='card-content'>
                    <span>By {item.author}</span>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                </div>
            </div>
        ))}
    </>
  )
}

export default Card
