import jwt from 'jsonwebtoken'
import {User} from '../models/userModels.js'

export const isAuthenticated = async(req,res,next)=>{
    //1, header se token lenge login he ya nhi uska
    const token = req.header('Auth')
    //console.log('check token',token)

    //token check krenge he ya nhi he he to l;ogin kro
    if(!token) return res.json({message:"login first"})
        
    //fir token ko verify krenge secreate key se
    const decoded = jwt.verify(token,process.env.JWT);
    console.log("token data",decoded)
    const id = decoded.userId;

    //toke verify krenge db me avilabve he ya nhi
    let user = await User.findById(id)

    if(!user) return res.json({message:"user not found"})

        //fir globaly save kr lenge
        req.user = user;

        next()

}