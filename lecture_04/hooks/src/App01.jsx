import { useState } from 'react'
import './App.css'

function App01() {
  const [data, setData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleChange = (value, inputName) => {
    console.log(value)
    // setData({ ...data, [value]: value })
    setData({ ...data, [inputName]: value.target.value })
    // do some logic here.
  }

  console.log(data)

  return (
    <form>
      <input onChange={(e) => handleChange(e, 'name')} value={data.name} type='text' />
      <br />
      <input onChange={(e) => handleChange(e, 'lastName')} value={data.lastName} type='text' />
      <br />
      <input onChange={(e) => handleChange(e, 'email')} value={data.email} type='email' />
      <br />
      <input onChange={(e) => handleChange(e, 'password')} value={data.password} type='password' />
      <br />
      <button>Submit</button>
    </form>
  )
}

export default App01
