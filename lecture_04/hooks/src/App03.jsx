import React, { useEffect, useState } from 'react'

const App03 = () => {
  // useState i useEffect gi povikuvame nagore vo komponentata
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([])

  useEffect(() => {
    // fetch('url').then((res) => res.json())
    setCart()
  }, [])

  useEffect(() => {
    // alert(count)
    console.log('triggered use effect')
  }, [count])

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <button onClick={() => handlePlus()}>+</button>
      <h1>{count}</h1>
      <button onClick={handleMinus}>-</button>
      <br />
      <br />
      {cart}
    </div>
  )
}

export default App03
