import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Sidebar = () => {
  const { contacts } = useLoaderData()
  console.log(contacts)
  return (
    <div id='sidebar'>
      <h1>React Router Contacts</h1>
      <div>
        <form id='search-form' role='search'>
          <input id='q' aria-label='Search contacts' placeholder='Search' type='search' name='q' />
          <div id='search-spinner' aria-hidden hidden={true} />
          <div className='sr-only' aria-live='polite'></div>
        </form>
        <form method='post'>
          <button type='submit'>New</button>
        </form>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={`/contacts/bojanangjeleski`}>Bojan Angjeleski</Link>
          </li>
          <li>
            {/* <a href={`/contacts/robiandreev`}>Robi Andreev</a> */}
            <Link to={`/contacts/robiandreev`}>Robi Andreev</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
