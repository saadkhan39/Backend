import React from 'react'
import {useNavigate} from "react-router-dom"
import "../nav.scss"

const Nav = () => {

    const navigate = useNavigate()
  return (

     <nav className='nav-bar' >
        <h1>Instagram</h1>
        <button onClick={
             ()=>{
                navigate("/create-post")
             }
        }
         className='button primary-button' ><i className="ri-add-line"></i> new post</button>
    </nav>
  )
}

export default Nav