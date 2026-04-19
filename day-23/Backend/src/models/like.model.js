const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"post id is required for creating a like"],
        ref:"posts"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"username is required for creating a like"]
    }
},{
    timestamps:true
})

likeSchema.index({post:1,user:1} ,{unique:true, name: "post_1_user_1"})

const likeModel = mongoose.model("likes",likeSchema)



module.exports = likeModel