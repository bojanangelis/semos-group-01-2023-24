import React from 'react'

const Header = () => {
  return (
    <div className='flex h-[60vh] sm:h-[40vh] md:h-[100vh] object-contain bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/0c55dc02-ef28-4531-82be-a21286e4b9d7/MK-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg)]'>
      <div className='flex items-center p-2 sm:p-10 h-10 justify-between w-full'>
        <img
          className='w-28'
          src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png'
          alt='netflix clone'
        />
        <button className='btn-primary'>Sing in</button>
      </div>
    </div>
  )
}

export default Header
