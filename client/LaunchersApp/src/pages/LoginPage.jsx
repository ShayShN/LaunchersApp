import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function LoginPage() {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        fetchData()
    }
    async function fetchData() {
        try {
            const response = await fetch("http://localhost:3001/api/auth/login",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
              username: username,
              password: password
            })
            })
            const data = await response.json()
            localStorage.setItem("token", data.token)
            localStorage.setItem("found", JSON.stringify(data.found))
            navigate("/")
            window.location.reload()
        } catch (error) {
            alert("loggin faild");
            
        }
    }

    return (
        
        <div onSubmit={handleSubmit}>
            <form className='flex gap-3' >
                <input className='border p-2' type="text" value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                <input className='border p-2' type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <button className='border w-fit cursor-pointer p-2 hover:bg-amber-400' type="submit">Send</button>
            </form>
        </div>
    )
}
