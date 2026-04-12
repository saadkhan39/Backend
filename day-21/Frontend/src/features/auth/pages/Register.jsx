import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../style/form.scss"
import { useAuth } from '../hooks/UseAuth'

const Register = () => {

  const navigate =useNavigate()

  const {loading,handleRegister} =useAuth()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   const submitHandler=async(e)=>{
      e.preventDefault()
      
      await handleRegister(username,email,password)
      console.log("user registered");

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
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <input onInput={(e)=>{
                  setUsername(e.target.value)
                }} type="text" name='username' placeholder='Enter Your Name' />
                <input onInput={(e)=>{
                  setEmail(e.target.value)
                }} type="text" name='email' placeholder='Enter Your Email' />
                <input onInput={(e)=>{
                  setPassword(e.target.value)
                }} type="password" name='password' placeholder='Enter Your Password ' />
                <button className='button primary-button'>Register</button>
                <p>Already have an account? <Link to={"/login"}>Login</Link></p>
            </form>
        </div>
    </main>
  )
}

export default Register