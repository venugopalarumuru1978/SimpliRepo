import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cat from './Components/Cat'
import Navbar from './Components/Navbar'
import Home1 from './Components/Home1'
import Test1 from './Components/Test1'
import Test2 from './Components/Test2'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/home"  element={<Home />} />
          <Route path="/home1"  element={<Home1 />} />
          <Route path="/cat"  element={<Cat />} />
          <Route path="/nav"  element={<Navbar />} />
          <Route path="/tst1"  element={<Test1 />} />
          <Route path="/tst2"  element={<Test2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
