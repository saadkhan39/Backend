const express = require("express")
const postController = require("../controllers/post.controller")
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const postRouter =express.Router()

// post api
/*  /api/posts/       */
postRouter.post("/",upload.single("image"),postController.createPostController)



postRouter.get("/",postController.getPostController)


postRouter.get("/details/:postId",postController.getPostDetailsController)




module.exports = postRouter