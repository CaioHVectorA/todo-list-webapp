import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Animations.css'
import { Route, RouterProvider, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import UserContext from './components/UserContext'

function App() {
  const [texto, setTexto] = useState('Teste')

  return (
    <UserContext.Provider value={{texto, setTexto}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
