import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import HomePage from './Homepage'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <Header />
      <HomePage />
    </div>

  )
}

export default App
