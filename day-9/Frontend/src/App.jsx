import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [notes, setNotes] = useState([])

//for fetching notes from backend
  function fetchNote(){
     axios.get("https://backend-lsz9.onrender.com/api/notes")  
    .then((res)=>{
      setNotes(res.data.note);
      
    })
  }
  useEffect(()=>{
     fetchNote()
  },[])

 //to create note 
  function submitHandler(e){
    e.preventDefault()
    const{title,description} =e.target.elements
    console.log(title.value,description.value);

    axios.post("https://backend-lsz9.onrender.com/api/notes",{  
      title:title.value,
      description:description.value
    })
    .then((res)=>{
      console.log(res.data);  
      fetchNote()
      e.target.reset()
      
    })
    
  }

  //to delete note
function deleteHandler(noteId){
  axios.delete("https://backend-lsz9.onrender.com/api/notes/"+noteId) 
  .then((res)=>{
       console.log(res.data);
       fetchNote()
  })

}

 //to update note
 function updateHandler(noteId){
  const newDescription = prompt("Enter New Description")
   axios.patch("https://backend-lsz9.onrender.com/api/notes/"+noteId,{description:newDescription})
   .then((res)=>{
    console.log(res.data);
    fetchNote()
   })
 }


  return (
   <>
   <form onSubmit={submitHandler}>
    <input type="text" placeholder='Enter title' name='title'/>
    <input type="text" placeholder='Enter description' name='description' />
    <button>Create Note</button>
   </form>
    <div className='notes'>
       {notes.map(function(elem,idx){
          return <div key={idx} className="note">
              <h1>{elem.title}</h1>
              <p>{elem.description}</p>
              <div className="btn">
                <button className='delete' onClick={()=>{
                  deleteHandler(elem._id)
                }}>Delete Note</button>
                <button className='edit' onClick={()=>{
                  updateHandler(elem._id)
                }}>Edit Note</button>
              </div>
          </div>
        
       })}
    </div>
   </>
   
  )
}

export default App