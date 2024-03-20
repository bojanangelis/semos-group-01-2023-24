import React from 'react'

const IsPrivate = ({ isPrivate }) => {
  return <div>{isPrivate && <p>This user is private</p>}</div>
}

export default IsPrivate
