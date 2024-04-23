import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthProvider from './store/AuthProvider'
import CheckoutProvider from './store/CheckoutProvider'
import HompePage from './HompePage'
import CheckoutPage from './CheckoutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CheckoutProvider>
            <Routes>
              <Route path='/' element={<HompePage />} />
              <Route path='/checkout' element={<CheckoutPage />} />

              <Route path='/login' element={<h1>Login</h1>} />
              <Route path='/signup' element={<h1>Login</h1>} />
            </Routes>
          </CheckoutProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
