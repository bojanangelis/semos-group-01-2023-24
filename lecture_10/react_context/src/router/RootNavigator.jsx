import React from 'react'
import { Outlet } from 'react-router-dom'

const RootNavigator = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default RootNavigator
