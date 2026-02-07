// Creating a notes application task,  in which user can create a note ,can see the created note, update a note and delete a note .

const express = require("express")

const app =express()   // to use req.body data , we use 

app.use(express.json())  // to use req.body data , we use this line.

const notes =[]

// Creating a note by using POST api .
app.post('/notes',(req,res)=>{

    console.log(req.body);

    notes.push(req.body)

     res.send('note created')
    
})


// To get note on client side we are using GET api here .
app.get('/notes',(req,res)=>{
    res.send(notes)
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

