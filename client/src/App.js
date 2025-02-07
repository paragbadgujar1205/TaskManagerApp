import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import Register from './Components/Register'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/Register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Login />
      <Register/> */}
    </>
  )
}

export default App
