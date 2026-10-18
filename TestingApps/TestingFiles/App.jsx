import { useState } from 'react'
import './App.css'
import Login from './Login'
import Test1 from './Test1'
import Demo1 from './Demo1'


function App() {

  return (
    <>
    <h1>Hello World Info</h1>
    <p>This is para graph</p>
    <img src='slide-1.jpg'  width="100%" height="200px" title="this is local image" />
    <hr />
    <Test1 />
    <hr />
    <Demo1 />
    <hr />
    <Login />

    </>
  )
}

export default App
