import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-react'
import HomePage from './pages/HomePage'

const RootNavigator = () => {
  const { isLoaded, userId } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const checkUser = () => {
      if (isLoaded && !userId) {
        navigate('/welcome')
      }
    }
    checkUser()
  }, [isLoaded, userId])

  console.log(isLoaded, userId)

  return (
    <Routes>
      <Route
        path='/welcome'
        element={
          <SignedOut>
            <WelcomePage />
          </SignedOut>
        }
      />
      <Route
        path='/'
        element={
          <SignedIn>
            <HomePage />
          </SignedIn>
        }
      />
    </Routes>
  )
}

export default RootNavigator
