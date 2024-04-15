import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Root, { loader as rootLoader } from './routes/root'
import Root, { cekanjeNaPodatociZaKontakti } from './routes/root'
import ErrorPage from './error-page'
import Contact from './routes/contact'
import { About } from './routes/About'

// https://reactrouter.com/en/main/start/tutorial#tutorial
// od

const router = createBrowserRouter([
  {
    path: '/', // index pateka ili home
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: cekanjeNaPodatociZaKontakti,
    children: [
      // go pushtame kako dete!
      // se shto ek mu pushtam kako page kako url link prikazigo so ovaj sidebar pogore!
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },

  // { ova nema da bide poseben page tuku odi gore i ke bide dete na ovoj root page
  //   path: 'contacts/:contactId',
  //   element: <Contact />,
  // },
  // {
  //   path: '/about',
  //   element: <div>About page</div>,
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
