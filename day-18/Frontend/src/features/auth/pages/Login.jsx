import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/form.scss"
import axios from "axios"

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function submitHandler(e){
         e.preventDefault()

        axios.post("http://localhost:3000/api/auth/login", {
            username,
            password,
        }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
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