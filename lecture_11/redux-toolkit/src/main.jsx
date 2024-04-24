import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 02 cekor *******
import { Provider } from 'react-redux'
import { store } from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // 02 cekor ******* */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* // 02 cekor ******* */}
  </React.StrictMode>
)

// 01 -->  npm install @reduxjs/toolkit react-redux
// 02 -->  main.jsx --> go vrapuvame <App /> so provider --> import { Provider } from 'react-redux'
// 03 -->  kreirame globalen store so configureStore odn redux import { store } from './store.js'
// 04 -->  krirame slice lushpa od kromid moze da imame 1 milion ako sakame counter slices vo applikacijata counterSlice
// 05
