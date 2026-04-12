import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../style/form.scss"
import { useAuth } from '../hooks/UseAuth'



const Login = () => {

  const navigate = useNavigate()

  const {loading,handleLogin}=useAuth()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler=async(e)=>{
         e.preventDefault()

         await handleLogin(username,password)
         console.log("user loggedIn");
         

         navigate("/")
  }

  if(loading){
   return(
     <main>
      <h1>Loading...</h1>
    </main>
   )
  }

  
  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <input onInput={(e)=>{
                     setUsername(e.target.value)
                }} type="text" name='username' placeholder='Enter Your Name' />
                <input onInput={(e)=>{
                      setPassword(e.target.value)
                }} type="password" name='password' placeholder='Enter Your Password ' />
                <button className='button primary-button'>Login</button>
                <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
            </form>
        </div>
    </main>
  )
}

export default Login