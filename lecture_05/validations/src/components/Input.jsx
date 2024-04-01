import React from 'react'
import PropTypes from 'prop-types'
import ReactSvg from '../assets/react.svg'
import './Input.css'

const Input = ({
  isUppercase,
  toggleIsShow,
  name,
  isShow,
  type,
  placeholder,
  value,
  onChange,
  className,
  toggleIsUppercase,
}) => {
  return (
    <div className='custom__input--div'>
      <img src={ReactSvg} alt='' />
      <input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`input ${className}`}
      />
      {name === 'password' &&
        (isShow ? (
          <button onClick={toggleIsShow}>👀</button>
        ) : (
          <button onClick={toggleIsShow}>🫣</button>
        ))}

      {name === 'username' &&
        (isUppercase ? (
          <button onClick={toggleIsUppercase}>👇</button>
        ) : (
          <button onClick={toggleIsUppercase}>👆</button>
        ))}
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, // funkcija
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  toggleIsShow: PropTypes.func,
  isUppercase: PropTypes.bool,
  toggleIsUppercase: PropTypes.func,
}

export default Input
