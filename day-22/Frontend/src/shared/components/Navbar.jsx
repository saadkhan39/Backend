import React from 'react'
import "../navbar.scss"
import {useNavigate} from "react-router-dom"

const Navbar = () => {

    const  navigate = useNavigate()
  return (
   <nav className='nav-bar'>
      <h1>Instagram</h1>
       <button onClick={()=>{
         navigate("/create-posts")
       }} className='button primary-button'>New Post</button>
   </nav>
  )
}

export default Navbar