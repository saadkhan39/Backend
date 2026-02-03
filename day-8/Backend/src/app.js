const express = require("express")
const noteModel =require("./models/notes.model")

const app = express()

app.use(express.json())

//POST api create note and save data on mongodb
app.post("/api/notes",async(req,res)=>{
    const {title,description} =req.body

  const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"Note created successfully",
        note
    })


})

//GET api  to fetch all the note from mongodb
app.get("/api/notes",async(req,res)=>{

   const note= await noteModel.find()

   res.status(200).json({
    message:"Note fetched successfully",
    note
   })
})

//DELETE api to delete note data
app.delete("/api/notes/:id",async(req,res)=>{
    const id = req.params.id

    const note = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note Deletd successfully"
    })
})

//PATCH api to update note data
app.patch("/api/notes/:id",async(req,res)=>{
    const id =req.params.id

    const {description}= req.body

   await noteModel.findByIdAndUpdate(id,{description})

     res.status(200).json({
        message:"Note Updated Successfully"
     })
})


module.exports =app