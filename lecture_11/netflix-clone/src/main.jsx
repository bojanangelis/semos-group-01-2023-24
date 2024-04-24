import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
// 01--> npm instal react-router-dom
// 02--> setup --> createBrowserRouter --> the routes that we need and the logic.

const router = createBrowserRouter([
  {
    path: '/welcome',
    element: <WelcomePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
