import React from 'react'
import { useOnlineStatus } from './hooks/useOnlineStatus'

const HomePage = () => {
  const isOnline = useOnlineStatus()

  //   const [isOnline, setIsOnline] = useState(true)

  //   useEffect(() => {
  //     function handleOnline() {
  //       setIsOnline(true)
  //     }
  //     function handleOffline() {
  //       setIsOnline(false)
  //     }
  //     window.addEventListener('online', handleOnline)
  //     window.addEventListener('offline', handleOffline)
  //     return () => {
  //       window.removeEventListener('online', handleOnline)
  //       window.removeEventListener('offline', handleOffline)
  //     }
  //   }, [])
  return <div>{isOnline ? '✅' : '❌'}</div>
}

export default HomePage
