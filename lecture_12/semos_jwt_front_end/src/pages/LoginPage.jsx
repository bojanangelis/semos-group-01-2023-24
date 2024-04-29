import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({}) => {
    const [email, setEmail] = useState('react@gmail.com')
    const [password, setPassword] = useState('Ljochev123456')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const data = await fetch('http://localhost:3000/api/user/login', { // ova e prasahanje za interview
            method: 'POST',
            headers:{
                // 'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`,
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email,
                password
                // podatok1,
                // podatok2
            })
        })
        const jwt_token = await data.json()

        if(jwt_token) {
            localStorage.setItem('jwt_token', jwt_token.token)
            navigate('/')
        }
    }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <input value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            type="text" placeholder='email'/>

            <input value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            type="text" placeholder='password'/>


            <button>Login</button>
        </form>
    </div>
  )
}

export default LoginPage