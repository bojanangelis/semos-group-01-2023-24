import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async() => {

        const data = await fetch('http://localhost:3000/api/recepie/name', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`,
                'Content-Type': 'application/json'
            },

        })
        setData(await data.json())
    }
    fetchData()
    }, [])

  return (
    <div>
      <h2>Our products</h2>
      <button onClick={() => navigate('/create')}>Add new product</button>
        {
            data.map((item) => (
              <button onClick={() => navigate(`/edit/${item._id}`, {id: item._id})} key={item._id}>
               <h3>{item.ime}</h3>
                {item.making.map((making)=> (
                  <p key={making}>{making}</p>
                ))}
              </button>
            ))
        }
    </div>
  )
}

export default HomePage