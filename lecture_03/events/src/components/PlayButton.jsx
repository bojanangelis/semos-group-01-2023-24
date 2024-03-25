import React from 'react'

const PlayButton = ({ movieName, handleClick }) => {
  return <button onClick={handleClick}>Play {movieName}</button>
}

export default PlayButton
