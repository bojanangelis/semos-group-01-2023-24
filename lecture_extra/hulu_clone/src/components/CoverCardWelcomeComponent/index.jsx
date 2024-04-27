import React from 'react'
import './style.scss'

const CoverCardWelcomeComponent = ({ img, category, subTitle }) => {
  return (
    <>
      <button className='cover-card__button'>
        <img className='poster_image' src={img} alt={subTitle} />
        <div className='cover-grid' />
        <div className='cover-card__text'>
          <div className='sub-title'>{subTitle}</div>
          <p>{category}</p>
        </div>
      </button>
    </>
  )
}

export default CoverCardWelcomeComponent
