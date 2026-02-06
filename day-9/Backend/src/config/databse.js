//connect with database
const mongoose = require("mongoose")

function connecToDb(){
    mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to DB");
    
})
}

module.exports = connecToDb