import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slice/basketSlice'

const ProductCardComponent = ({ product }) => {
  const dispatch = useDispatch() // dispatch e hook gledajteja kako pishtol koj puka vo global state.

  return (
    <div className='w-48 p-8 border  border-gray-300 m-4'>
      <img src={product.image} />
      <h2 className='text-sm truncate pt-4'>{product.title}</h2>
      <div className='flex items-center justify-center'>
        <h2 className='text-sm truncate pt-4'>{product.price}</h2>
        <button
          onClick={() => dispatch(addToBasket(product))}
          className='p-1 bg-yellow-400 rounded'
        >
          add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCardComponent
