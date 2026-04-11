const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        unique:[true,"username already exists"]
    },
    email:{
        type:String,
        required:[true,"email address is required"],
        unique:[true,"email already exists"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/pilfuubys/download.jfif?updatedAt=1772014150561"
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel