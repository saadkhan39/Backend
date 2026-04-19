import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthDataContext = createContext()

const AuthContext = ({children}) => {

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)

  return (
    <AuthDataContext.Provider value={{loading,setLoading,user,setUser}}>
        {children}
    </AuthDataContext.Provider>
  )
}

export default AuthContext