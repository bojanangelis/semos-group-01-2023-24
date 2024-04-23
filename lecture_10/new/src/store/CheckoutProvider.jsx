import { createContext, useContext, useState } from 'react'

const CheckoutContext = createContext()

const CheckoutProvider = ({ children }) => {
  const [basket, setBasket] = useState([])

  const addToBasket = (product) => {
    setBasket([...basket, product])
  }

  return (
    <CheckoutContext.Provider value={{ addToBasket, basket }}>{children}</CheckoutContext.Provider>
  )
}

export const useBasketStore = () => {
  return useContext(CheckoutContext)
}

export default CheckoutProvider
