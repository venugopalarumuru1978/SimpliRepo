import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'
import Test1 from './Test1'
import StdInfo from './StdInfo'
import DemoState from './DemoState'
import DemoInput from './DemoInput'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src="slide-1.jpg" height="250px" width="100%" alt="No Image" />
      <h1 style={{color:"red",backgroundColor:"yellow"}}>This is App Component</h1>
      <DemoState />
      <hr />
      <DemoInput />
      <hr />
      <Test1 />
      <hr />
      <StdInfo />
    </>
  )
}

export default App