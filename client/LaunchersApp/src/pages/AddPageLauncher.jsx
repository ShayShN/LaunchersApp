import React, { useState } from 'react'
import launchersStore from '../../store/zustand.js'

export default function AddPageLauncher() {
  const addLauncher = launchersStore((state) => state.addLauncher)
  const [name, setName] = useState("")
  const [rocketType, setRocketType] = useState("")
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [city, setCity] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    await fetchData()
  }
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3001/api/launchers", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name,
          rocketType,
          latitude,
          longitude,
          city
        })
      })
      const data = await response.json()
      addLauncher(data)
    } catch (error) {
      console.log(error);
      
    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <select onChange={(e)=> setRocketType(e.target.value)}>
          <option value={""}>Some option</option>
          <option value={"Kheibar"}>Kheibar</option>
          <option value={"Radwan"}>Radwan</option>
          <option value={"Fetah110"}>Fetah110</option>
          <option value={"Shahab3"}>Shahab3</option>
        </select>
        <input type="number" placeholder='Latitude' value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        <input type="number" placeholder='Longitude' value={longitude} onChange={(e) => setLongitude(e.target.value)} />
        <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
