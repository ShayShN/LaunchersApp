import React, { useEffect } from 'react'
import launchersStore from '../../store/zustand';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const arrayLaunchers = launchersStore((state) => state.launchers)



  console.log(arrayLaunchers);

  return (

    <div className='flex flex-col p-3 gap-3  '>
      <h1 className='font-bold self-center'>HomePage</h1>
      <Link className='border w-fit hover:bg-amber-200' to={"/add"}>Add Page Launcher</Link>
      <Link className='border w-fit hover:bg-amber-200' to={"/launcher"}> Launch Details</Link>
      {arrayLaunchers.map((launch) => (
        <div className='flex flex-col border-2 font-bold' key={launch._id}>
          <p>id: {launch._id}</p>
          <p>city: {launch.city}</p>
          <p>rocketType: {launch.rocketType}</p>
          <p>latitude: {launch.latitude}</p>
          <p>longitude: {launch.longitude}</p>
          <p>name: {launch.name}</p>
        </div>
      ))}
    </div>
  )
}
