const express = require("express")
const postController = require("../controllers/post.controller")
const multer = require("multer") // we use multer package to store files temporary on server , and also bcz of format-data on postman does not supported by express server 
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const postRouter = express.Router()


//post api for creating an post
postRouter.post("/",upload.single("image"),postController.createPostController)


module.exports = postRouter