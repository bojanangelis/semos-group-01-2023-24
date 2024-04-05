import React, { useState } from 'react'
import { CheckIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import ToDoForm from './ToDoForm'

const ToDoTasks = ({ todos, updateTodo, deleteTodo }) => {
  const [editInput, setEditInput] = useState({
    id: null, // 0.412321321
    text: '', // niza03
  })

  const submitUpdate = (value) => {
    console.log(editInput)
    updateTodo(editInput.id, value)
    setEditInput({
      id: null,
      text: '',
    })
  }

  // editInput.id ja vrajkam ovaa TOdoForm
  if (editInput.id) return <ToDoForm edit={editInput} handleAddToDo={submitUpdate} />

  return todos?.map((todo) => (
    <div
      key={todo.id}
      className='mt-4 flex items-center border bg-white border-white p-2 rounded-md'
    >
      <input value={todo.text} className='bg-transparent flex-1 w-96 outline-none' type='text' />
      <div className='space-x-4'>
        <button className='bg-green-400 p-1 rounded-sm'>
          <CheckIcon className='h-6 w-6 text-white' />
        </button>
        <button
          onClick={() => setEditInput({ id: todo.id, text: todo.text })}
          className='bg-red-400 p-1 rounded-sm'
        >
          <PencilSquareIcon className='h-6 w-6 p-1 text-white' />
        </button>
      </div>
    </div>
  ))
}

export default ToDoTasks
