import express from "express"
import { register,login } from "../controlers/userControler.js";

const router = express.Router();

//user reegister
//@api dsc :- user register
//@api method :- POST
//@api endPoint :- /api/user/register 
router.post('/register',register)

//user login 
//@api dsc :- user login
//@api method :- POST
//@api endPoint :- /api/user/login 
router.post('/login',login)

export default router;