import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddPageLauncher from './pages/AddPageLauncher'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import launchersStore from '../store/zustand'

function App() {
  const {fetchLaunchers} = launchersStore()

  useEffect(()=> {
    fetchLaunchers()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/add" element={<AddPageLauncher />} />
        <Route path="/launcher" element={<LauncherDetailsPage />} />
        <Route path="/launcher" element={<LauncherDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
