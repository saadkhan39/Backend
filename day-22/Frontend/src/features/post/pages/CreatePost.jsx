import React, { useRef, useState } from 'react'
import "../style/createPost.scss"
import { usePost } from '../hook/usePost'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const {handleCreatePost,loading} = usePost()

    const [caption, setCaption] = useState("")
    const postImageInputRef =useRef()

    const navigate = useNavigate()

    const submitHandler =async(e)=>{
       e.preventDefault()


       const file = postImageInputRef.current.files[0]

       await handleCreatePost(file,caption)

       navigate("/")


    }

    if(loading){
        return <main>
            <h1>creating post...</h1>
        </main>
    }
  return (
    <main className='create-post'>
        <div className="form-container">
            <h1>Create post</h1>
            <form onSubmit={submitHandler}>
                <label className='postImageLabel' htmlFor="postImage" onClick={()=>postImageInputRef.current.click()}>Select image</label>
                <input hidden type="file" name='postImage' id='postImage' ref={postImageInputRef} />
                <input value={caption} onInput={(e)=>{
                    setCaption(e.target.value)
                }} type="text" name='caption' id='caption' placeholder='Enter caption' />
                <button className='button primary-button'>Create post</button>
            </form>
        </div>
    </main>
  )
}

export default CreatePost