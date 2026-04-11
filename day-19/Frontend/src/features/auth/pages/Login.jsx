import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {handleLogin}  =useAuth()

    async function submitHandler(e){
         e.preventDefault()

         handleLogin(username,password)
         .then(res=>{
            console.log(res);
            
         })
    }
    
  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <input onInput={(e)=>{
                    setUsername(e.target.value)
                }} type="text" name='username' placeholder='Enter Username' />
                <input onInput={(e)=>{
                    setPassword(e.target.value)
                }} type="text" name='password' placeholder='Enter Password' />
                <button>Login</button>
                <p>Don't have an account? <Link className='toggle' to="/register">Register</Link></p>
            </form>
        </div>
    </main>
  )
}

export default Login