import { useState } from 'react'
import AddEmp from './Admin/AddEmp'
import ViewAllEmps from './Admin/ViewAllEmps'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLinks from './Navbar/AdminLinks'
import SearchEmp from './Admin/SearchEmp'
import ModEmp from './Admin/ModEmp'
import Login from './Authenticate/Login'
import EmpBio from './Emps/EmpBio'
import ChangePwd from './Emps/ChangePwd'
import GenLinks from './Navbar/GenLinks'
import EmpLinks from './Navbar/EmpLinks'
import Logout from './Authenticate/Logout'

function App() {
  const [count, setCount] = useState(0)
  const [loginStatus, setLoginstatus] = useState('gen')

  return (
    <>    
    <h1 style={{textAlign:"center"}}>Employee Application</h1>
    <hr />
    <BrowserRouter>
        {loginStatus == "gen" ? (
          <GenLinks></GenLinks>
        ) : loginStatus == "admin" ? (
          <AdminLinks></AdminLinks>
        ) : loginStatus == "emp" ? (
          <EmpLinks></EmpLinks>
        ) : "" }

        <Routes>
            <Route path='/'  element={<Login />} />
            <Route path='/login'  element={<Login setLoginstatus={setLoginstatus} />} />
            <Route path='/logout'  element={<Logout setLoginstatus={setLoginstatus} />} />
            <Route path='/newemp'  element={<AddEmp />} />
            <Route path='/cpwd'  element={<ChangePwd />} />
            <Route path='/e_bio/:eid'  element={<EmpBio />} />
            <Route path='/viewallemp'  element={<ViewAllEmps />} />
            <Route path='/s_emp/:eid'  element={<SearchEmp />} />
            <Route path='/m_emp/:eid'  element={<ModEmp />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
