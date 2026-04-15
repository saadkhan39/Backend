import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './features/auth/pages/Register'
import Login from './features/auth/pages/Login'
import Feed from './features/posts/pages/Feed'

const AppRoutes = () => {
  return (
   <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
     <Route path='/' element={<Feed/>}/>
   </Routes>
  )
}

export default AppRoutes