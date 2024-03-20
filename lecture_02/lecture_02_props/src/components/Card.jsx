import React from 'react'

const Card = (props) => {
    console.log(props)
    // props.nesht 
    // props.data
    
    return (
    <div>
        <img src={props.img} alt='img' />
        <p>{props.title}</p>
        <p>{props.description}</p>
    </div>
  )
}

export default Card