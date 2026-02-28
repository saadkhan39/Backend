const express = require("express")
const postController = require("../controller/post.controller")
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const identifyUser = require("../middleware/auth.middleware")


const postRouter = express.Router()


//  post api 
/*    /api/posts/    */
postRouter.post("/",upload.single("image"),identifyUser,postController.createPostController)


postRouter.get("/",identifyUser,postController.getPostController)

postRouter.get("/details/:postId",identifyUser,postController.getPostDetailsController)



module.exports =postRouter