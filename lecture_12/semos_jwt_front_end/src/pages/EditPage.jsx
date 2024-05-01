import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'

const EditPage = () => {
    const [data, setData] = useState();
    const [name, setName] = useState('');
    // this two for inputs
    const [making, setMaking] = useState('');
    const [sostojki, setSostojki] = useState('');

    // this two for seting the array
    const [makingData, setMakingData] = useState(data?.making);
    const [sostojkiData, setSostojkiData] = useState(data?.sostojki);
    let { id } = useParams();
    //
    // /api/recepie/id/:id

    // for homework
    // app.put("/api/recepies/update/:id",updateNewRecepie);
     
    useEffect(() => {
        if(id) {
            const fetchDataById = async() => {
            const data = await fetch(`http://localhost:3000/api/recepie/id/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`,
                'Content-Type': 'application/json'
            },    
        })
        setData(await data.json())
            }
            fetchDataById()
        }
    }, [id])

    
    const handleEditSubmit = async() => {
        try {
            await fetch(`http://localhost:3000/api/recepies/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ime: name, making: makingData, sostojki: sostojkiData, time: '30min'})
            })
            alert('Recepie created successfully')
        }
        catch (err){
            alert('Error creating recepie')
            console.error(err)
        }
        finally {
            alert('Recepie created successfully')
        }
    }

    const handleSetMaking = () => {
        setMakingData([...makingData, making])
    }

    const handleSetSostojki = (e) => {
        setSostojkiData([...sostojkiData, sostojki])
    }

    console.log(data);

  return (
    <div>
        {data ? (
         <button key={data._id}>
            {data.ime}
                {data.making.map((making)=> (
                  <p key={making}>{making}</p>
                ))}
                {data.sostojki.map((making)=> (
                  <p key={making}>{making}</p>
                ))}
              </button>
        ) : 
        <p>Loading...</p>
        }

        <hr />
        <hr />
        EDIT!!!
        <hr />
        <hr />

        <form onSubmit={(e) => e.preventDefault()}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Ime'/>
            <hr />
{/* tuka ja slusham promenata na tastatura */}
        <input value={making} onChange={(e) => setMaking(e.target.value)} type="text" placeholder='making'/> 
        <button onClick={handleSetMaking}>Add</button>
        {makingData?.map((item)=> (
            <p key={item}>{item}</p>
        ))}
        <hr />

        <input value={sostojki} onChange={(e) => setSostojki(e.target.value)} type="text" placeholder='sostojki'/>
        <button onClick={handleSetSostojki}>Add</button>
        {sostojkiData?.map((item)=> (
            <p key={item}>{item}</p>
        ))}
        <hr />

        <button onClick={handleEditSubmit}>EDIT</button>
    </form>
    </div>
  )
}

export default EditPage