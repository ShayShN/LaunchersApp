import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddPageLauncher from './pages/AddPageLauncher'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import launchersStore from '../store/zustand'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Navbar from './compons/Navbar'

function App() {
  const {fetchLaunchers} = launchersStore()

  useEffect(()=> {
    fetchLaunchers()
  }, [])

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={< HomePage />} />
        <Route path="/add" element={<AddPageLauncher />} />
        <Route path="/launcher" element={<LauncherDetailsPage />} />
        <Route path="/getUser" element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App
