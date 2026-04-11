const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imgUrl:{
        type:String,
        required:[true,"img url is required for creating an post"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:"user id is required for creating an post"
    }
})

const postModel = new mongoose.model("posts",postSchema)

module.exports = postModel