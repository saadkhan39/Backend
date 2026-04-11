import React, { createContext, useState } from 'react'
import {login ,register ,getMe} from "../service/auth.api"


export const AuthDataContext = createContext()

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

   const handleLogin = async(username,password)=>{
    setLoading(true)
    try {
        const response = await login(username,password)
        setUser(response.user)
        return response
    } catch (error) {
        console.log(error);
        throw error  
    }
   finally{
     setLoading(false)
   }
   }
    
   const handleRegister =async(username,email,password)=>{
    setLoading(true)
    try {
        const response = await register(username,email,password)
        setUser(response.user)
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
    finally{
        setLoading(false)
    }

   }

  return (
   <AuthDataContext.Provider value={{user,loading,handleLogin,handleRegister}}>
     {children}
   </AuthDataContext.Provider>
  )
} 

export default AuthContext