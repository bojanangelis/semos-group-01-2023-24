import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import RootNavigator from './RootNavigator.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <RootNavigator />
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// clerk.com
// kreirate .env folder vo root app
// treba neshto vaka da izgleda

// VITE_CLERK_PUBLISHABLE_KEY=pk_test_dGFsZWZWQtcGhlYXNhbnQtNDMuY2xlcmsu

//npm install @clerk/clerk-react
