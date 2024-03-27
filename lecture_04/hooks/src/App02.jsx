import React, { useState } from 'react'
import './App.css'

const App02 = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Name: ${name}, LastName: ${lastName}, Email: ${email}, Password: ${password}`)
    setName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setMessage('Form submitted successfully')
  }

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} type='text' />
      <br />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} type='text' />
      <br />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' />
      <br />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' />
      <br />
      <p>{message}</p>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  )
}

// input*4 za kreiranje na 4 inputi
export default App02
