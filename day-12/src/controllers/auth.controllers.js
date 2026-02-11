const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

async function registerController(req,res){
    const{username,email,password,bio,profileImage} = req.body

    const isUserAlreadyExsits = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
     if(isUserAlreadyExsits){
        res.status(409).json({
            message:"user already exists "+ (isUserAlreadyExsits.email ==email ? "with this email address ":"with this username")
        })
    }
   const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        username,
        email,
        password:hash,
        bio,
        profileImage
    })
    const token = jwt.sign({
        id:user._id,
    },
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
)
   res.cookie("jwt-token",token)
   
    res.status(201).json({
        message:"user reqistered successfully",
        user:{
            username:user.username,
            email:user.email,
            profileImage:user.profileImage,
            bio:user.bio

        }
        
    })

    

}

async function loginController(req,res){
 
    const{username,email,password} =req.body

    const user = await userModel.findOne({
        $or:[
            {
                username:username
            },
            {
                email:email
            }
        ]
    })
    if(!user){
        res.status(404).json({
            message:"user not found"
        })
    }
    const hash = crypto.createHash("md5").update(password).digest("hex")

    const isPasswordValid = hash ==user.password

    if(!isPasswordValid){
        res.status(401).json({
            message:"invalid password"
        })
    }

    const token = jwt.sign({
        id:user._id,
    },
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
)
  res.cookie("token",token)

  res.status(201).json({
    message:"user logged in succcessfully",
    user:{
        username:user.username,
        email:user.email,
        bio:user.bio,
        profileImage:user.profileImage
    }
  })

}



module.exports ={registerController,loginController}