import React, { useState } from 'react'
import HuluLogo from '../../assets/hulu.svg'
import './style.scss'
import useDynamicBackground from '../../hooks/useDynamicBackground'
import { useNavigate } from 'react-router-dom'
import { SignInButton } from '@clerk/clerk-react'

const HeaderWelcomeComponent = () => {
  const navigate = useNavigate()
  // https://getbem.com/naming/ css
  const [dynamicBackground, setDynamicBackground] = useState(
    'https://cnbl-cdn.bamgrid.com/assets/62ed936344e6ffbac48c896b2bd327fe171521dd941b6ddc8402e2eae50116fc/original'
  )
  // const handleChangeImage = () => {
  //   console.log('click')
  //   setDynamicBackground(
  //     'https://img.goodfon.com/original/1920x1080/1/61/fon-netflix-logo-raduga-tsvet-fon-background-skachat-oboi-sk.jpg'
  //   )
  // }

  const backgroundStyle = useDynamicBackground(dynamicBackground)

  return (
    <>
      <header style={backgroundStyle} className='header-welcome__component'>
        <nav>
          <span>
            <img src={HuluLogo} alt='Hulu logo' className='logo-welcome__component' />
          </span>
          <SignInButton>
            <button onClick={() => navigate('/')} className='login-btn__welcome'>
              Log in
            </button>
          </SignInButton>
        </nav>

        <div className='main-header__content'>
          <div className='header-content'>
            <div className='header-content__view'>
              <h4>DISNEY BUNDLE DUO BASIC</h4>
              <img
                src='https://cnbl-cdn.bamgrid.com/assets/1305412ac38a70617630e94f568baa85cd5d28b5ee2d8a39eb63300cce1f219b/original'
                alt='Hulu Disney'
              />
              <div className='header-content-text'>Both with ads, for $9.99/month.</div>
              <button className='button-primary'>get them both</button>
            </div>
            <div className='header-content__view'>
              <h4>DISNEY BUNDLE TRIO BASIC</h4>
              <img
                src='https://cnbl-cdn.bamgrid.com/assets/1305412ac38a70617630e94f568baa85cd5d28b5ee2d8a39eb63300cce1f219b/original'
                alt='Hulu Disney'
              />
              <div className='header-content-text'>All with ads, for $14.99/month.</div>
              <button className='button-primary'>get all three</button>
            </div>
          </div>
          <div className='links'>
            <h5>Terms apply</h5>
            <h5>Sign up for Hulu only</h5>
          </div>
        </div>
      </header>
      {/* <button onClick={() => handleChangeImage()} className='button-primary'>
        Toggle image
      </button> */}

      {/* <div className='dropdown'>
        <button className='dropbtn'>Dropdown</button>
        <div className='dropdown-content'>
          <a href='#home'>Link1</a>
          <a href='#home'>Link2</a>
          <a href='#home'>Link3</a>
          <a href='#home'>Link4</a>
        </div>
      </div> */}
    </>
  )
}

export default HeaderWelcomeComponent
