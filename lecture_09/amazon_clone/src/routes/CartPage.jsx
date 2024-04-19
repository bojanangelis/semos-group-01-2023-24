import React from 'react'
import { useSelector } from 'react-redux'
import ProductCardComponent from '../components/ProductCardComponent'

const CartPage = () => {
  const products = useSelector((state) => state.basket.items) // so use selector gi zemame podatocite

  return (
    <div>
      in my card items selected / {products.length}
      {products.map((product) => (
        <ProductCardComponent product={product} />
      ))}
    </div>
  )
}

export default CartPage
