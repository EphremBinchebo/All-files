import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import CampaignBuilder from './pages/CampaignBuilder'
import SocialConnect from './pages/SocialConnect'
import SettingsPage from './pages/SettingsPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import './styles.css'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/dashboard' element={<DashboardPage/>} />
        <Route path='/builder' element={<CampaignBuilder/>} />
        <Route path='/connect' element={<SocialConnect/>} />
        <Route path='/settings' element={<SettingsPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
