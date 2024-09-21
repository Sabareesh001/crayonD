import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Routes from '../routers/routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  console.log(<Routes/>)
  return (
    <Router>
       <Routes/>
    </Router>
  )
}

export default App
