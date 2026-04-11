import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './features/auth/pages/Register'
import Login from './features/auth/pages/Login'

const AppRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<h1>Welcome to the App</h1>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
  )
}

export default AppRoutes