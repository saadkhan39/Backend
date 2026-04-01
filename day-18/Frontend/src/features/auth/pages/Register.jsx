import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  async function submitHandler(e){
      e.preventDefault()

        axios.post("http://localhost:3000/api/auth/register",{
            username,
            email,
            password,
        },{
            withCredentials:true
        })
        .then(res => {
            console.log(res.data)
        })
    }

  return (
     <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <input onInput={(e)=>{
                     setUsername(e.target.value)
                }} type="text" name='username' placeholder='Enter Username' />
                <input onInput={(e)=>{
                     setEmail(e.target.value)
                }} type="text" name='email' placeholder='Enter Email' />
                <input onInput={(e)=>{
                    setPassword(e.target.value)
                }} type="text" name='password' placeholder='Enter Password' />
                <button>Register</button>
                <p>Already have an account? <Link className='toggle' to="/login">Login</Link></p>
            </form>
        </div>
    </main>
  )
}

export default Register