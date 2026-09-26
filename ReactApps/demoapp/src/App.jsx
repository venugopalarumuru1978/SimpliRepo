import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'
import Child4 from './Child4'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import './App.css'
import './Child1.css'
import Home from './Home'
import Contact from './Contact'
import Navbar from './Navbar'
import Login from './Login'
import Welcome from './Welcome'
import Register from './Register'
function App() {
  const [loc, setLoc] = useState('Hyderabad');

  const  testClickFun = () =>{
    alert('This is function defined in App.jsx');
  }

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <hr />
      <br />

        <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/home' element ={<Home />} />
          <Route path='/contact' element ={<Contact />} />
          <Route path='/login' element ={<Login />} />
          <Route path='/welcome' element ={<Welcome />} />
          <Route path='/reg' element ={<Register />} />
          <Route path='/ch1' element={<Child1 pname="Satya Prakash" age = {30} location = {loc} />} />
          <Route path='/ch2' element={<Child2 author="Venugopal"  bookname="SQL" isSelling={true} />} />
          <Route path='/ch3' element={<Child3 btnAction = {testClickFun} />} />
          <Route path='/ch4' element={
          <Child4>
            <h1 style={{textAlign:"center"}}>This is React Session</h1>
            <p style={{textAlign:"justify"}}>
              React automatically gathers any content placed between a component's opening and closing tags and passes it as a special prop named children. This is ideal for layout wrappers, cards, or modal boxes.
            </p>
          </Child4>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
