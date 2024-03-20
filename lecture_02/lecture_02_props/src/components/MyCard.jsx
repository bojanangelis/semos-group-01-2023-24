import React from 'react'

// dva nacini na koristenje na props 
// ova e descrtruction na props
const MyCard = ({img, title, price, date, description}) => {
  return (
    <div className='my-card'>
      <p>❤️</p>
        <img src={img} width={450} alt={title} />
        <h3>{title}</h3> 
        <p>{description}</p>
        <p>{date}</p>
        <p>$ {price} special price for this period of time.</p>
    </div>
  )
}

export default MyCard