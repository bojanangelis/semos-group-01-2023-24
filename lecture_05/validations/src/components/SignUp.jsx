import React, { useState } from 'react'
import Input from './Input'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div>
      <Input
        name='email'
        value={email}
        onChange={(e) => handleEmail(e)}
        type='email'
        className={'email__className'}
        placeholder='Enter you email'
      />
      <Input
        name='password'
        value={password}
        onChange={(e) => handleEmail(e)}
        type='password'
        placeholder='Enter you password'
      />
    </div>
  )
}

export default SignUp
