import express from 'express'
import { getContactById,getAllContact, newContact, updateContactById, deleteContactById, getContactByUserId } from "../controlers/contactControler.js";
import { isAuthenticated } from '../middleware/auth.js';
const router = express.Router();

//user contact
//@api dsc :- creating contact
//@api method :- POST
//@api endPoint :- /api/contact/new
router.post('/new',isAuthenticated,newContact)

//get all contact
//@api dsc :- all contact
//@api method :- Get
//@api endPoint :- /api/contact/
router.get('/',getAllContact)

//get by id contact
//@api dsc :- get single contact
//@api method :- GET
//@api endPoint :- /api/contact/id.....
router.get('/:id',getContactById)

//get by id update contact
//@api dsc :- get update contact
//@api method :- PUT
//@api endPoint :- /api/contact/id.....
router.put('/:id',isAuthenticated,updateContactById)

//get by id delete contact
//@api dsc :- get delete contact
//@api method :- DELETE
//@api endPoint :- /api/contact/id.....
router.delete('/:id',isAuthenticated,deleteContactById)

//user specific con tact ropuiter
router.get('/userid/:id',getContactByUserId)


export default router;
