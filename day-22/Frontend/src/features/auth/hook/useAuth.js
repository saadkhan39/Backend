import { useContext, useState } from "react";
import { AuthDataContext } from "../context/AuthContext";
import {login,register} from "../service/auth.api"


export const useAuth= ()=>{
    const context = useContext(AuthDataContext)
    
    const {loading,setLoading,user,setUser} = context

    const handleLogin= async(username,password)=>{
       setLoading(true)
       const response = await login(username,password)
       setUser(response.user)
       setLoading(false)
    }

    const handleRegister = async(username,email,password)=>{
        setLoading(false)
        const response = await register(username,email,password)
        setUser(response.user)
        setLoading(false)
    } 

    return (
        {user,loading,handleLogin,handleRegister}
    )
}


