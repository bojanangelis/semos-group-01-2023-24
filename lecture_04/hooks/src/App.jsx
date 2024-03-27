import { useState } from 'react'
import './App.css'
function App() {
  // count ni e vrednosta variablata
  // setCount ni funkcija koja menja vrednost variablata
  // useState(0) inicijalna vrednost ja ostavame na nula
  // const [movies, setMovies] = useState([])
  // let array = []

  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')
  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  // const handleChangeInput = (event) => {
  //   console.log(event.target.value)
  //   setInput(event.target.value)
  // }

  //forma so usestate ime prezime, email, passowrd i on click alert

  return (
    <>
      <button onClick={() => handlePlus()}>+</button>
      <h1>{count}</h1>
      <button onClick={handleMinus}>-</button>
      <br />
      <br />
      <input value={input} onChange={(event) => handleChangeInput(event)} type='text' />
    </>
  )
}

export default App
