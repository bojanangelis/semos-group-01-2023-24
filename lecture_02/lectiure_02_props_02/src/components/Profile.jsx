import React from 'react'
import Avatar from './Avatar'

const Profile = ({ name, age, avatar_img, isPrivate }) => {
  return (
    <div>
      {isPrivate ? (
        <p>This user is private</p>
      ) : (
        <>
          <h2>{name}</h2>
          <h4>{age} years old</h4>
          <Avatar img={avatar_img} />
        </>
      )}
    </div>
  )
}

export default Profile
