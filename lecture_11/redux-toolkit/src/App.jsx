import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './slices/counterSlice'
// ts -- typescript
// js -- javascript
// tsx -- typescript + javascript + jsx
// jsx -- javascript + jsx
// znaci vo jsx vrajkame html plus javascript

function App() {
  // login -- user = null
  // /homePage -- user = {id: 3213214soakwoe, username: Bojan, email: bojan@email.com }
  // handleLogin
  // /login
  // /signup

  // app.jsx  -- > useSelector((state) => state.auth)
  // header.jsx --> useSelector((state) => state.auth.img)
  // checkout.jsx -->xx

  // lokalen state e state koi e samo vo komponentata.
  // const [counter, setCounter] = useState(0) // ova e lokalen sate.
  // cekor 05 povikuvanje na hook useDispatch
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      {/* cekor 5.1 vaka se koristi dispatch pusthame akcija od globalnito state. vo slucajov increment(). Mora da e exportirana cekor 06. */}
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default App
