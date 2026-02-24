const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"user name already exists"],
        required:[true,"user name is required"]
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
        default:"https://ik.imagekit.io/hnoglyswo0/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp"
    }
    
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel