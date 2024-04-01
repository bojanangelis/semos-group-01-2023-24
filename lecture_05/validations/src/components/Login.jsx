import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const Login = () => {
  const [isShow, setIsShow] = useState(false)
  const [isUppercase, setIsUppercase] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('') // ReferenceError useState is not defined

  // sekogash koga sakate da pushtite setEmail vo slucajov seter od useState pushtajtego vo funkcija
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleShowPassword = (e) => {
    e.preventDefault()
    setIsShow(!isShow) // negacija na true e false i obratno
    // so ova imame toggle effect funkcija.
  }

  const toggleIsUppercase = (e) => {
    e.preventDefault()
    setIsUppercase(!isUppercase) // ja menuvam vrednosta
  }

  const capletter = () => {
    if (isUppercase) {
      return username.toUpperCase()
    } else {
      return username.toLowerCase()
    }
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
        isUppercase={isUppercase}
        toggleIsUppercase={(e) => toggleIsUppercase(e)}
        name='username'
        value={capletter()}
        onChange={(e) => handleUsername(e)}
        type='text'
        placeholder='Enter you username'
      />
      <Input
        isShow={isShow}
        toggleIsShow={(e) => handleShowPassword(e)}
        name='password'
        value={password}
        onChange={(e) => handlePassword(e)}
        type={isShow ? 'text' : 'password'}
        placeholder='Enter you password'
      />
      <Button text='submit' />
    </div>
  )
}

export default Login
