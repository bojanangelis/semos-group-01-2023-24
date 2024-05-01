import { useEffect, useState } from 'react'

const useCode = (items) => {
  const [code, setCode] = useState()

  console.log(items)
  // za doma levis farmerki -20 % dizel farmerki - 10% site drugi imaat -30%
  useEffect(() => {
    if (items.length >= 2) {
      setCode('-20%')
    }
    if (items.length >= 3) {
      setCode('-30%')
    }
    if (items.length >= 3) {
      setCode('-30%')
    }
  }, [])

  return code
}

export default useCode
