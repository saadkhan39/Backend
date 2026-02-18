const mongoose = require("mongoose")


async function connectToDb() {
    mongoose.connect(process.env.MONGO_URI)
    console.log("connect to DB");
    
}

module.exports = connectToDb