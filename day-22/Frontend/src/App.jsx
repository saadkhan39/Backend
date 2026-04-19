import React from 'react'
import AppRoutes from './AppRoutes'
import "./shared/global.scss"
import AuthContext from './features/auth/context/AuthContext'
import PostContext from './features/posts/context/PostContext'

const App = () => {
  return (
    <AuthContext>
      <PostContext>
        <AppRoutes/>
      </PostContext>
    </AuthContext>
  )
}

export default App