const express =require('express')

const app =express()  //server ko create kiya h

app.use(express.json()) //middleware use krenge , isko server config krna bolte h

const notes =[]


//POST api
app.post('/notes',(req,res)=>{
    notes.push(req.body)

    res.status(201).json({
        message:"Note Created Successfully"
    })
    
})

//GET api
app.get('/notes',(req,res)=>{
    
    res.status(200).json({
      notes:notes
    })
})

//DELETE api
app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index]

     res.status(200).json({
        message:"Note Deleted Successfully"
     })
})

//PATCH api
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description =req.body.description

    res.status(200).json({
        message:"Note Updated Succesfully"
    })
})


module.exports = app