import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Animations.css'
import { Route, RouterProvider, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import UserContext from './components/UserContext'
import Login from './components/Login'

function App() {
  const [texto, setTexto] = useState('Teste')
  const [guestMode, setGuestMode] = useState(false)
  return (
    <UserContext.Provider value={{texto, setTexto,guestMode,setGuestMode}}>
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
