//Create server
//config server

const express =require("express")
const noteModel = require("./models/notes.models")
const cors = require("cors")
const path = require("path")


const app =express()
app.use(express.json())
app.use(cors()) //for cors policy error
app.use(express.static("./public")) //for integrating with frontend


//POST api for creating notes
app.post("/api/notes",async(req,res)=>{
    const{title,description} =req.body

 const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        messsage:"Note Created Successfully",
        note
    })
})

//GET api for fetching notes
app.get("/api/notes",async(req,res)=>{

   const note =await noteModel.find()

   res.status(200).json({
    message:"Note Fetched Successfully",
    note
   })
})

//DELETE api for deleting notes
app.delete("/api/notes/:id",async(req,res)=>{
    const id = req.params.id

    const note = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note Deleted successfully"
    })
})

//PATCH api for updating notes
app.patch("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    const{description}=req.body

    const note =await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        message:"Note Updated Successfully"
    })
})


//creating wild card route to handle uncreate api's
app.use("*name",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

module.exports=app