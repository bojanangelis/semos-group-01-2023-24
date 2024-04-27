import React from 'react'
import './style.scss'
import { huluPosters } from '../../mock/mock-data'
import CoverCardWelcomeComponent from '../CoverCardWelcomeComponent'

const MainWelcomeComponent = () => {
  return (
    <main className='main-content'>
      <div className='main-content_titles'>
        <h4>INCLUDED IN ALL PLANS</h4>
        <span>All The TV You Love</span>
        <p>
          Watch full seasons of exclusive streaming series, current-season episodes, hit movies,
          Hulu Originals, kids shows, and more.
        </p>
      </div>
      <div className='covers'>
        {huluPosters.map((poster, i) => (
          <CoverCardWelcomeComponent
            key={i}
            img={poster.img}
            subTitle={poster.subTitle}
            category={poster.category}
          />
        ))}
      </div>
    </main>
  )
}

export default MainWelcomeComponent
