import React, { useEffect, useState } from 'react'
import ProductCardComponent from '../components/ProductCardComponent'

const HomePage = ({ setSelectedItems }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducst = async () => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => setProducts(json))
    }

    fetchProducst()
  }, [])

  return (
    <div className='flex flex-1 flex-wrap'>
      {products.map((product) => (
        <ProductCardComponent setSelectedItems={setSelectedItems} product={product} />
      ))}
    </div>
  )
}

export default HomePage
