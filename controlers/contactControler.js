import { Contact } from "../models/contactModel.js";

//create new contact
export const newContact = async(req,res)=>{
    //fetch data from models
    const {name,email,phone,type} = req.body;

    if(email==="" || name==="" || phone==="" || type===""){
        return res.json({message:"all fields are required..",success:false})   
    }

    //check ye contact phele se exist krta hge ya nyhi
    let contacts = await Contact.findOne({phone})
    if(contacts) return res.json({message:"contact already exist",success:false})

    //save data in db .create() method and konsa data save krna 
    //req.user jb contact save hoga to kon sa user create kya uska id aa jayega (model me create kye dekho)
    let saveContact = await Contact.create({name,email,phone,type,user:req.user})
    res.json({message:"contact saved successfully..",success:true})
    
}

//UPDATE CONTACT 
export const updateContactById = async(req,res)=>{
    //id chaiye konsa id se update krna he
    const id = req.params.id
    //data chaiye konsa data me update krna he
    const {name , email,phone,type}= req.body

    //findByIdAndUpdate se data ko update krenge
    let updatedContact = await Contact.findByIdAndUpdate(id,{
        name,email,phone,type
    },{new:true})

    if(!updatedContact) return res.json({message:"contact not exist",success:false})

    
    res.json({message:"your contact saved",updatedContact,success:true})
}

//UPDATE DELETE 
export const deleteContactById = async(req,res)=>{
    //id chaiye konsa id se delete krna he contact ko
    const id = req.params.id

    //findByIdAndUpdate se data ko update krenge
    let deleteContact = await Contact.findByIdAndDelete(id)

    if(!deleteContact) return res.json({message:"contact not exist",success:false})

    
    res.json({message:"your contact deleted",success:true})
}


//GET ALL CONTACT
export const getAllContact = async(req,res)=>{
    //find a all contact via find() method
    const userContact = await Contact.find();

    if(!userContact) return res.json({message:"no contact exist",success:false})

    res.json({message:"all contact fetched",userContact,success:true})
}

//get contact by id
export const getContactById = async(req,res)=>{
    //id chaiye kon se d se contact serch krna chahte he us params
    const id = req.params.id

    //db me check krenge yer idf avilabe he ya nhi
    const userContact = await Contact.findById(id)
    if(!userContact) return res.json({message:"contact not exist",success:false})

    res.json({message:"find these contact",userContact,success:true})
}

//get contact by userId
export const getContactByUserId = async(req,res)=>{
    const id= req.params.id;

    const userContact = await Contact.find({user:id})
    if(!userContact) return res.json({message:"contact not avialable"})

    res.json({message:"user specific contact found",userContact,success:true})
}