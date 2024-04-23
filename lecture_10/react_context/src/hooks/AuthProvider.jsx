import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setAuth(user)
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [auth])

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider
