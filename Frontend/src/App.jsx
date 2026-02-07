import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [notes, setNotes] = useState([])

  function fetchNote(){
    axios.get("http://localhost:3000/api/notes")
    .then((res)=>{
      setNotes(res.data.note);
     
      
    })
  }

  useEffect(()=>{
    fetchNote()
  },[])

   function submitHandler(e){
    e.preventDefault()
    const{title,description}=e.target.elements
    console.log(title.value,description.value);

    axios.post("http://localhost:3000/api/notes",{
      title:title.value,
      description:description.value
    })
    .then((res)=>{
      console.log(res.data);
      fetchNote()
      e.target.reset()
      
    })
  }

  function deleteHandler(noteId){
      axios.delete("http://localhost:3000/api/notes/"+noteId)
       .then((res)=>{
        console.log(res.data);
      fetchNote()  
      })     
  }

  function editHandler(noteId){
    const newDescription = prompt("Enter new description")
    axios.patch("http://localhost:3000/api/notes/"+noteId,{description:newDescription})
    .then((res)=>{
      console.log(res.data);
      fetchNote()
      
    })
    
  }

  return (
  <>
 <form onSubmit={submitHandler} >
  <input type="text" name="title" placeholder='Enter title'  />
  <input type="text" name='description' placeholder='Enter description' />
  <button>Create Note</button>
 </form>
   <div className='notes'>
      {notes.map(function(elem,idx){
        return <div key={idx} className='note'>
          <h1>{elem.title}</h1>
        <p>{elem.description}</p>
        <div className="btn">
          <button onClick={()=>{deleteHandler(elem._id)}} className='delete'>Delete Note</button>
          <button onClick={()=>{editHandler(elem._id)}} className='edit'>Edit Note</button>
        </div>
        </div>
      })}
    </div>
  </>
  )
}

export default App