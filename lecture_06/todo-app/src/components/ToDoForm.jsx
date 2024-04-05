import React, { useState } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

const ToDoForm = ({ handleAddToDo, edit }) => {
  const [inputText, setInputText] = useState('')

  const handleClickPlus = (e) => {
    e.preventDefault() // prevent default da ne se refresiram
    handleAddToDo({ id: Math.random(Math.floor * 1000), text: inputText }) // tuka mu pushtam obiekt od id: random 01 02, text:
    setInputText('')
  }

  return (
    <form>
      {/* {edit ? (
        <div className='flex mt-4 items-center border bg-white border-white p-2 rounded-md'>
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className='bg-transparent flex-1 w-96 outline-none'
            type='text'
            placeholder='Edit your todo'
          />
          <button
            type='submit'
            onClick={(e) => handleClickPlus(e)}
            className='bg-green-400 p-1 rounded-sm'
          >
            <CheckIcon className='h-6 w-6 text-white' />
          </button>
        </div>
      ) : ( */}
      <div className='flex items-center border bg-white border-white p-2 rounded-md'>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className='bg-transparent flex-1 w-96 outline-none'
          type='text'
        />
        <button
          type='submit'
          onClick={(e) => handleClickPlus(e)}
          className='bg-orange-400 p-1 rounded-sm'
        >
          <PlusIcon className='h-6 w-6 text-white' />
        </button>
      </div>
      {/* )} */}
    </form>
  )
}

export default ToDoForm
