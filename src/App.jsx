import { useState } from 'react'
import './App.css'
import WelCome from './Components/WelCome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './Components/LogIn';

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<WelCome/>} />
        <Route path="/login" element={<LogIn/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
