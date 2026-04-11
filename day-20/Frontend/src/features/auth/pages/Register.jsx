import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/form.scss"
import UseAuth from '../hooks/UseAuth'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {handleRegister} = UseAuth() 
    const navigate =useNavigate()

     const submitHandler=(e)=>{
        e.preventDefault()

        handleRegister(username,email,password)
         .then(res=>{
            console.log(res);
            navigate("/login")
         })

     }

  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
           <form onSubmit={(e)=>{
            submitHandler(e)
           }}>
            <input onInput={(e)=>{
                setUsername(e.target.value)
            }} type="text" placeholder='Enter Your Name' name='username' />
            <input onInput={(e)=>{
                setEmail(e.target.value)
            }} type="text" placeholder='Enter Your Email' name='email' />
            <input onInput={(e)=>{
                setPassword(e.target.value)
            }} type="password" placeholder='Enter Your Password' name='password' />
            <button>Register</button>
            <p>Already have an account? <Link className='toggle' to="/login">Login</Link></p>
            </form> 
        </div>
    </main>
  )
}

export default Register