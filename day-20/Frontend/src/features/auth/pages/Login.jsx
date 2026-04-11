import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/form.scss"
import UseAuth from '../hooks/UseAuth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {handleLogin,loading} = UseAuth()
    const navigate = useNavigate()

    if(loading){
        return <h1>Loading...</h1>
    }

    const submitHandler=(e)=>{
         e.preventDefault()

         handleLogin(username,password)
         .then(res=>{
            console.log(res);
            navigate("/")
         })

         
         
    }
  return (
     <main>
        <div className="form-container">
            <h1>Login</h1>
           <form onSubmit={(e)=>{
            submitHandler(e)
           }} >
            <input 
            onInput={(e)=>{
                setUsername(e.target.value)
            }}
             type="text" placeholder='Enter Your Name' name='username' />
            <input onInput={(e)=>{
                setPassword(e.target.value)
            }} type="password" placeholder='Enter Your Password' name='password' />
            <button>Login</button>
            <p>Don't have an account? <Link className='toggle' to="/register">Register</Link></p>
            </form> 
        </div>
    </main>
  )
}

export default Login