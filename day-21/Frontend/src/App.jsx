import React from 'react'
import AppRoutes from './AppRoutes'
import "./shared/global.scss"
import AuthContext from './features/auth/context/AuthContext'

const App = () => {
  return (
    <AuthContext>
      <AppRoutes/>
    </AuthContext>
  )
}

export default App