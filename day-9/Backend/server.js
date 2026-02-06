//start server
require("dotenv").config()
const app = require("./src/app")
const connecToDb = require("./src/config/databse")

connecToDb()

app.listen(3000,()=>{
    console.log("server is ruuning on port 3000");
    
})