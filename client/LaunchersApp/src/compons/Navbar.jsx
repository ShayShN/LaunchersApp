
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  const token = localStorage.getItem("token")
  const currentUser = localStorage.getItem("found")
  const userParse = JSON.parse(currentUser)
  
  function handleLogout() {
    localStorage.removeItem("token")
    localStorage.removeItem("found")
    navigate("/login")
    window.location.reload()
    
  }

  function handleActiveUser() {
    if (!token) {
      navigate("/login")
    }
    alert(`type: ${userParse.user_type}, username: ${userParse.username}`)
  }

  return (
    <nav className='flex p-3 gap-3'>
      <Link className='border w-fit' to={"/login"}>Login Page</Link>
      {token && <button className='border w-fit cursor-pointer' onClick={handleLogout}>Logout</button>}
      {userParse?.user_type == "admin" && <Link className='border w-fit' to={"/getUser"}>Register Page</Link>}
      <button className='border w-fit cursor-pointer' onClick={handleActiveUser}>Get Active User</button>
    </nav>
  )
}
