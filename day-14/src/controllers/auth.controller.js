const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

//register controller
async function registerController(req,res){
    const{username,email,password,bio,profileImage}= req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"user already exists"+(isUserAlreadyExists.email ===email?" with this email address":" with this username")
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')

    const user = await userModel.create({
        username,
        email,
        password:hash,
        bio,
        profileImage
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,
    {expiresIn:"1d"})

    res.cookie("token",token)
    
    return res.status(201).json({
        message:"user registered successfully",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })
}

//login controller
async function loginController(req,res){
    const {username,email,password} = req.body

    const user = await userModel.findOne({
        $or:[
            {username:username},
            {email:email}
        ]
    })
    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }

    const isPasswordValid =user.password ===crypto.createHash('sha256').update(password).digest('hex')

    if(!isPasswordValid){
        return res.status(409).json({
            message:"Invalid password"
        })
    }
    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,
     {expiresIn:"1d"})

     res.cookie("token",token)

    return res.status(200).json({
        message:"user loggedIn successfully",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })

}


module.exports = {registerController,loginController}