import { useState } from 'react'
import AddEmp from './Admin/AddEmp'
import ViewAllEmps from './Admin/ViewAllEmps'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLinks from './Navbar/AdminLinks'
import SearchEmp from './Admin/SearchEmp'
import ModEmp from './Admin/ModEmp'
import Login from './Authenticate/Login'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
    <h1 style={{textAlign:"center"}}>Employee Application</h1>
    <hr />
    <BrowserRouter>
    <AdminLinks />
        <Routes>
            <Route path='/'  element={<Login />} />
            <Route path='/login'  element={<Login />} />
            <Route path='/newemp'  element={<AddEmp />} />
            <Route path='/viewallemp'  element={<ViewAllEmps />} />
            <Route path='/s_emp/:eid'  element={<SearchEmp />} />
            <Route path='/m_emp/:eid'  element={<ModEmp />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
