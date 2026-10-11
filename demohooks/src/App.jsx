import { useMemo, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import DemoHook from './DemoHook'
import { useSquare } from './Hooks/Sqr'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Welcome from './Hooks/Welcome'
function App() {
  const [count, setCount] = useState(0)
  const [val, setVal] = useState(5);

  const [input, setInput] = useState(5);
  const squared = useSquare(input);

  const sqrRes = useMemo(()=>{
    return Square(val);
  },[val]);
  
  return (
    <>
    <h1>This is App Component</h1>
    <input type='button'  value='Increment'  onClick={()=>{setCount(count+1)}} />
    <input type='button'  value='Change Value '  onClick={()=>{setVal(val+1)}} />
    <h1>Count Val {count}</h1>
    <h2>{val} Square Value is : {sqrRes}</h2>
    <hr />
  
    <DemoHook />

    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Square Calculator Hook</h2>
      <label>
        Enter a number: 
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </label>
      <p style={{ marginTop: '15px', fontSize: '18px' }}>
        The square of <strong>{input || 0}</strong> is <strong>{squared}</strong>.
      </p>
    </div>

    <BrowserRouter>
      <Routes>
        <Route  path="/login" element={<Login />} />
        <Route  path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

const Square = (n) =>{
  let sqr = n*n;
  console.log("Square fun called...");
  return sqr;
}

export default App
