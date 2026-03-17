import React, { useState } from 'react'

export default function RegisterPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [user_type, setType_user] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await fetch("http://localhost:3001/api/auth/register/create",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
              username,
              password,
              email,
              user_type
            })
            })
            const data = await response.json()
            window.location.reload()
    }

  return (
    <div >
        <form className='flex flex-col p-3 gap-3' onSubmit={handleSubmit}>
            <input className='border' placeholder='username' type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input className='border' placeholder='PASS' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input className='border' placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <select className='border w-fit' value={user_type} onChange={(e) => setType_user(e.target.value)}>
                <option value="">User Type </option>
                <option value="aman">Aman</option>
                <option value="airforce">AirForce</option>
                <option value="admin">Admin</option>
            </select>
            <button className='border w-fit cursor-pointer ml-2' type="submit">Create</button>
        </form>
    </div>
  )
}
