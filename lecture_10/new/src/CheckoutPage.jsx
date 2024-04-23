import React from 'react'
import { useBasketStore } from './store/CheckoutProvider'

const CheckoutPage = () => {
  const { basket } = useBasketStore()
  console.log(basket)
  return (
    <div>
      {basket.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  )
}

export default CheckoutPage
