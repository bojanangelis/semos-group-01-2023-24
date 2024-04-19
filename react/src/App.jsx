import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decremented, incrementByAmount, incremented } from './store/buttonSlice';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState(4) 
  const count = useSelector((state) => console.log(state)) // useSelector e hook od react-redux kadeo shto ja zema vrednosta od reducerot.
  const dispatch = useDispatch(); // dispatch e hook koja ja povikuva akcijata vo reducerot.
  console.log(typeof inputText)

  return (
    <>
      <button onClick={() => dispatch(incremented())}>+</button>
        {count}
      <button onClick={() => dispatch(decremented())}>-</button>

      <input pattern="^[0-9]*[.,]?[0-9]*$" type='number' value={inputText} onChange={(e) => setInputText(e.target.value)}  />
      <button onClick={() => dispatch(incrementByAmount(inputText))}>increment By Amount</button>
    </>
  )
}

export default App
