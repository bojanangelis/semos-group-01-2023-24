import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { getContacts } from '../contacts'

export async function cekanjeNaPodatociZaKontakti() {
  const contacts = await getContacts()
  return { contacts }
}

export default function Root() {
  return (
    <>
      {/* <Header /> */}
      <Sidebar />
      <div id='detail'>
        <Outlet />
        {/* {children} isto kako childrens da pusthame vo componenta */}
      </div>
    </>
  )
}
