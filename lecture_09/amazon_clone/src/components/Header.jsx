import React from 'react'
import amazonLogo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  const products = useSelector((state) => state.basket.items) // so use selector gi zemame podatocite
  console.log(products)
  return (
    <header className='bg-[#131921]'>
      <div className='flex items-center justify-between'>
        <div className='p-4 flex items-center space-x-4'>
          <img className='w-32' src={amazonLogo} alt='Amazon logo' />
          <div className='flex flex-col'>
            <p className='text-gray-400 text-sm'>Deliver to</p>
            <p className='text-white text-xl'>Macedonia</p>
          </div>
        </div>
        <div className='border border-gray-400 p-2 rounded-md'>
          <input
            className='bg-transparent border-none flex-1 outline-none text-white'
            type='text'
            placeholder='Search'
          />
        </div>
        <div className='flex items-center space-x-2 pr-10'>
          <Link to={'/cart'} className='text-white text-lg'>
            Cart
          </Link>
          <p className='text-white p-4 bg-green-400 rounded-full'>{products.length}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
