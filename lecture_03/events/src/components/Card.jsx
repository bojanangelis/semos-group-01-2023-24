import React from 'react'

const Card = ({ children }) => {
  return (
    <div
      style={{
        width: 200,
        height: 350,
        borderRadius: '10px',
        background: 'lightblue',
        color: 'black',
      }}
    >
      {children}
    </div>
  )
}

export default Card
