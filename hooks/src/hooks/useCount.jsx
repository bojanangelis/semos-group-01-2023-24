import React, { useState } from 'react'

const useCount = () => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return {
    count,
    increment,
    decrement,
    reset,
  }
}

export default useCount
