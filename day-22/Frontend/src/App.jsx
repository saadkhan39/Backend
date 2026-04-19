import React from 'react'
import AppRoutes from './AppRoutes'
import "./features/shared/global.scss"
import AuthContext from './features/auth/context/AuthContext'
import PostContext from './features/post/context/PostContext'

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