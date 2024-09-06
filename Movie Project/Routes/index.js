const express =require('express');
const routes=express.Router();

const multer=require('multer');



const movieCtl = require('../Controller/movieCtl');

const Storage=multer.diskStorage({
  destination : (req,file,cb) =>{
    cb(null,"uploads/")
  },
  filename : (req,file,cb) =>{
    cb(null,file.fieldname+"-"+Date.now());
  }
})

const uploadsPic=multer({storage:Storage}).single("image")


routes.get("/",movieCtl.home);

routes.get("/adddata",movieCtl.adddata);

routes.post("/innserdata",uploadsPic,movieCtl.insserdata)

routes.get("/deletedata",movieCtl.deletedata)

routes.get("/editdata",movieCtl.editdata)

routes.post("/updatedata",uploadsPic,movieCtl.updatedata)

module.exports=routes;




