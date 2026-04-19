import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './features/auth/pages/Register'
import Login from './features/auth/pages/Login'
import Feed from './features/post/pages/Feed'
import CreatePost from './features/post/pages/CreatePost'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Feed/>}/>
        <Route path='/create-post' element={<CreatePost/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes