import React from 'react'
import { useBasketStore } from './store/CheckoutProvider'
import { Link } from 'react-router-dom'

const HompePage = () => {
  const { addToBasket, basket } = useBasketStore()
  console.log(basket)
  return (
    <div>
      <Link to='/checkout'>checkout</Link>
      <button onClick={() => addToBasket('product1')}>product 1</button>
      <button onClick={() => addToBasket('product2')}>product 2 </button>
      <button onClick={() => addToBasket('product3')}>product 3</button>
    </div>
  )
}

export default HompePage
