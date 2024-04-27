import React from 'react'
import huluLogo from '../../assets/hulu.svg'
import { Link } from 'react-router-dom'
import './style.scss'
import { UserButton } from '@clerk/clerk-react'

const Header = () => {
  return (
    <div className={`nav ${'nav__white'}`}>
      <div className='nav__contents'>
        <img className='nav__logo' src={huluLogo} alt='hulu logo' />
        <ul className='nav__links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a href='#'>Live</a>
          </li>
          <li>
            <a href='#'>Movies</a>
          </li>
          <li>
            <a href='#'>Sports</a>
          </li>
          <li>
            <a href='#'>My Stuff</a>
          </li>
        </ul>
        <div className='nav__avatar'>
          <UserButton />
        </div>
      </div>
    </div>
  )
}

export default Header
