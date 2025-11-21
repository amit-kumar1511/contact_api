import {User} from '../models/userModels.js'
import bcrypt from 'bcryptjs' //use for hash password
import jwt from 'jsonwebtoken'

export const register = async(req,res)=>{
    //console.log('printing data',req.body)
    const {name,email,password} = req.body;

    if (name=="" || email==="" || password==="") {
        return res.json({message:"All fiels are required.."})
    }
    //user already register or not
    let user = await User.findOne({email})
    if(user)return res.json({message:"user already exist",success:false})

    //hash password using bcrypt.js
    const hashPassword = await bcrypt.hash(password,10)

    //save data in db
    user =await User.create({name,email,password:hashPassword})
    res.json({message:"user created successfully",success:true,user})
}

//login
export const login  = async(req,res)=>{
    const {email,password} = req.body;

     if (email==="" || password==="") {
        return res.json({message:"All fiels are required.."})
    }

    //check through email available in db or not
    const user = await User.findOne({email})
    if(!user) return res.json({message:"user not exist",success:false})

        //convert vailid password
    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword) return res.json({message:"Invalid password",success:false})

        //save information in jwt token
        const token = jwt.sign({userId:user._id},process.env.JWT)
        //all condition satisfied then return
        res.json({message:`welcome ${user.name}`,token,success:true})



}