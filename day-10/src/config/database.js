//connect with with database
const mongooose = require("mongoose")

function connectedToDb(){
    mongooose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to DB");
    
})
}

module.exports= connectedToDb