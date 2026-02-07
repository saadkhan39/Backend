//server ko start krenge 
//server ko database se connect krenge

const app =require('./src/app')
const mongoose = require("mongoose")

//server to database se connect krenge 
function connectToDb(){
     mongoose.connect('mongodb+srv://saadkhan:cTniorksYwyfdXGY@cluster0.ufkcgqi.mongodb.net/day-6')
     .then(()=>{
        console.log("connect to db");  
     })
}
connectToDb()

app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})