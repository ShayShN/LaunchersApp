import React, { useEffect } from 'react'
import launchersStore from '../../store/zustand';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const arrayLaunchers = launchersStore((state) => state.launchers)
  

  
  console.log(arrayLaunchers);
  
  return (
    <div>
      <Link to={"/add"}>Add Launch</Link>
      <Link to={"/launcher"}>Details</Link>
      {arrayLaunchers.map((launch) => (
        <div key={launch._id}>
          <p>{launch._id}</p>
          <p>{launch.city}</p>
          <p>{launch.rocketType}</p>
          <p>{launch.latitude}</p>
          <p>{launch.longitude}</p>
          <p>{launch.name}</p>
        </div>
      ))}
    </div>
  )
}
