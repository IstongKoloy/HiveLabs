import React from 'react'
import './articles.css'
import Card from './Card'

const Articles = () => {
  return (
    <div className='section articles'>
      <div className='article-title'>
        <h1>Latest Articles</h1>
      </div>
      <div className='articles-card'>
        <Card />
      </div>
    </div>
  )
}

export default Articles
