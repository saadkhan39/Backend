// isme server ko create karnege or server ko config karenge

const express =require("express")

const app =express() //server create ho gya 

app.use(express.json()) // server req.body ka data by default padh nhi skta, uske liye hme "app.use" middileware ka use krnege.

const notes =[]

// yahn pr hum note create krenge uske liye POST api ka use krenge.
app.post('/notes',(req,res)=>{
    console.log(req.body);
    
    notes.push(req.body)
    res.send("notes created")
    console.log(notes);
})

// yahn pr hum note ko frontend pr laenge  uske liye GET api ka use krenge.
app.get('/notes',(req,res)=>{
    res.send(notes)
})

// note ko delete krne ke liye DELETE api use krenege aur yahan pr single data ka use kr rhe h isliye req.params ka use krenge.(index)
app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index];

    res.send('note deleted successfully')
    
})

// note ke description ko update krne ke liye PATCH api ka use krenege.
app.patch("/notes/:index",(req,res)=>{
     notes[req.params.index].description =req.body.description

     res.send("note updated successfully")
})

module.exports =app