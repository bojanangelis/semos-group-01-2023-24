import React from 'react'

const KopcheAlert = ({ message, children }) => {
  // vo children renderirame JSX!!!
  return <button onClick={() => alert(message)}>{children}</button>
}

export default KopcheAlert
