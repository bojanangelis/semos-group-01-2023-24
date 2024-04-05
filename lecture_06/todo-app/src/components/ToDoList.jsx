import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoTasks from './ToDoTasks'

const ToDoList = () => {
  const [todos, setTodos] = useState([]) // niza todos vo ova niza gi zacuvuvam site todos koi gi imam kreirano
  // const [history, setHistory] = useState([]) // niza history vo ova niza gi zacuvuvam site todos koi gi imam kreirano
  // {
  //   id: 0.321421321,
  //   text: 'buy milk',
  //   isChecked: false, kako hint
  // }
  const addTodo = (value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return
    }
    // spread operator [...todos]
    // buy some mulk
    // buy egs
    // buy watter
    // [{ id: 1, text: jajca }, { id:2, text: milk }, { id: 82, text: neshto }]
    setTodos([value, ...todos])
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    // toods.map mapirame proveruvame vo nizata
    // dali ova todoId koe go pushtame vo parametar go ima vo niza
    // ako go ima stavija ovaa newValue ako go nemash vratigo nazad (item)
    setTodos(todos.map((item) => (item.id === todoId ? newValue : item)))
  }

  const deleteTodo = (deleteId) => {
    // vo ovaa funkcija ke treba da ja izmapirate todos, da go izbrishte todos od originalna no pred da go izbrishite da go steapirate vo delete za history e ova
    // setTodos(todos.map((item) => (item.id === deleteId ? newValue : item)))
    // proveruvame dali item.id === deleteId togash treba da go izbrisham toj obiekt od ovaa niza -- HOMEWORK.
  }

  return (
    <div>
      <ToDoForm handleAddToDo={addTodo} />
      <ToDoTasks todos={todos} updateTodo={updateTodo} />
      {/* <HistoryTabs   tuka stavetego*/}
    </div>
  )
}

export default ToDoList
