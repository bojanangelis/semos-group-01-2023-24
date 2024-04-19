import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Root = ({ setSelectedItems }) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Root
