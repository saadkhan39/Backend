const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"user name is required"],
        unique:[true,"user name already exists"]
    },
    email:{
        type:String,
        required:[true,"email address is required"],
        unique:[true,"email  already exists"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://imagekit.io/dashboard/media-library/detail/699eca465c7cd75eb802150b"
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel