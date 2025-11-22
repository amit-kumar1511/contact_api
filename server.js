import express from 'express'
import mongoose from 'mongoose'
import userRouter  from './Routes/userRoute.js'
import contactRouter from './Routes/contactRoute.js'
import {config} from 'dotenv'

const app = express();

//body data parse i json format
app.use(express.json());

//.env setup
config({path:'.env'})

//home route 
app.get('/',(req,res)=>{
    res.json({message:'this is home route'})
})


//User Routes
app.use('/api/user',userRouter)

//contact routes
app.use('/api/contact',contactRouter)

//connect db
mongoose.connect(process.env.MONGODB_URL,{dbName:"Amit_kumar_raj"}).then(()=>console.log('mongodb connected..!')).catch((err)=>console.log(err))

const port = process.env.PORT || 9000;

app.listen(port,()=>{
    console.log(`server is running port ${port}`)
})