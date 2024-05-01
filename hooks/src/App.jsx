import { useState } from 'react'
import './App.css'
import CustomPortal from './CustomPortal'
import Modal from './Modal'
import StatusBar from './hooks/StatusBar'
import { useOnlineStatus } from './hooks/useOnlineStatus'
import useCount from './hooks/useCount'
import useCode from './hooks/useCode'

function App() {
  const isOnline = useOnlineStatus()
  const code = useCode(['test', 'tes'])
  console.log(code)
  const [isOpen, setIsOpen] = useState(false)
  const { count, increment, decrement, reset } = useCount()

  // useEffect(() => {
  //   function handleOnline() {
  //     setIsOnline(true)
  //   }
  //   function handleOffline() {
  //     setIsOnline(false)
  //   }
  //   window.addEventListener('online', handleOnline)
  //   window.addEventListener('offline', handleOffline)
  //   return () => {
  //     window.removeEventListener('online', handleOnline)
  //     window.removeEventListener('offline', handleOffline)
  //   }
  // }, [])
  // https://react.dev/learn/reusing-logic-with-custom-hooks

  return (
    <>
      {/* {StatusBar()} */}
      <StatusBar />
      <button onClick={() => setIsOpen((e) => !e)}>Open modal</button>
      <div>{isOnline ? '✅ Online' : '❌ Disconnected'}</div>

      <div>count: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>RESET!</button>

      {isOpen && (
        //  <h2>SEMOS</h2>

        <CustomPortal>
          {/* <Modal /> */}
          <h2>SEMOS</h2>
        </CustomPortal>
      )}
    </>
  )
}

export default App
