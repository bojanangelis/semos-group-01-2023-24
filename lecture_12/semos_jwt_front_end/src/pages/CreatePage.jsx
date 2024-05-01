import { useState } from 'react'
import React from 'react'

const CreatePage = () => {
    const [name, setName] = useState('');
    // this two for inputs
    const [making, setMaking] = useState('');
    const [sostojki, setSostojki] = useState('');

    // this two for seting the array
    const [makingData, setMakingData] = useState([]);
    const [sostojkiData, setSostojkiData] = useState([]);

    const handleSubmit = async() => {
        try {
            await fetch('http://localhost:3000/api/recepies/create', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, making: makingData, sostojki: sostojkiData, time: '30min'})
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

  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Ime'/>
            <hr />
{/* tuka ja slusham promenata na tastatura */}
        <input value={making} onChange={(e) => setMaking(e.target.value)} type="text" placeholder='making'/> 
        <button onClick={handleSetMaking}>Add</button>
        {makingData.map((item)=> (
            <p key={item}>{item}</p>
        ))}
        <hr />

        <input value={sostojki} onChange={(e) => setSostojki(e.target.value)} type="text" placeholder='sostojki'/>
        <button onClick={handleSetSostojki}>Add</button>
        {sostojkiData.map((item)=> (
            <p key={item}>{item}</p>
        ))}
        <hr />

        <button onClick={handleSubmit}>Create</button>
    </form>
  )
}

export default CreatePage