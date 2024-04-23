import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './router/Home'
import Signup from './router/Signup'
import Login from './router/Login'
import AuthProvider from './hooks/AuthProvider'

const App = () => {
  return (
    <BrowserRouter>
      {/* Auth Provider my custom context provider */}
      <AuthProvider>
        <Routes path='*'>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/sign-up' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
