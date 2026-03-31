const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""    
    },
    imgUrl:{
        type:String,
        required:[true,"img url is required for creating an post"],
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"user id is required for creating an posts"]
    }
})

const postModel = mongoose.model("posts",postSchema)

module.exports = postModel