const ImageKit = require("@imagekit/nodejs")
const {toFile} = require("@imagekit/nodejs")
const postModel = require("../models/post.model")
const jwt = require("jsonwebtoken")


const imagekit = new ImageKit({
  privateKey: process.env.PRIVATE_KEY, 
});

async function createPostController(req,res){
    console.log(req.body,req.file);

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Token not provided, Unauthorized access"
        })
    }

    let decoded = null
    try {
        decoded = jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
       return res.status(401).json({
        message:"user not authorized"
       }) 
    }

   const file = await imagekit.files.upload({
   file: await toFile(Buffer.from(req.file.buffer), 'file'),
   fileName: 'Test',
   folder:"cohort-2-instaclone-posts"
   });

   const post = await postModel.create({
       caption:req.body.caption,
       imgUrl:file.url,
       user:decoded.id
   })
   
   return res.status(201).json({
    message:"post created successfully",
    post
   })

}

async function getPostController(req,res){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Token not provided ,unauthorized access"
        })
    }
    let decoded  =null
    try {
        decoded =jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({
            message:"user not authorized"
        })
    }

    const userId = decoded.id

    const posts = await postModel.find({
        user:userId
    })

    return res.status(200).json({
        message:"post fetched successfully",
        posts
    })
}

async function getPostDetailsController(req,res) {
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Token not provided ,Unauthorized access"
        })
    }
    
    let decoded = null
    try {
        const decoded= jwt.verify(token,process.env.JWT_SECRET)
    }
     catch (error) {
       return res.status(401).json({
        message:"unauthorized access"
       }) 
    }

    const userId= decoded.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"post not found"
        })
    }
   
    const isValidUser =  post.user.toString()===userId

    if(!isValidUser){
        return res.status(403).json({
            message:"Forbidden Content"
        })
    }

    return res.status(200).json({
        message: "Post fetched  successfully.",
        post
    })
}

module.exports = {createPostController,getPostController,getPostDetailsController}