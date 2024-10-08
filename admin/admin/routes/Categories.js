const express=require('express');
const route=express.Router();
const multer=require("multer");
const CategoriesCtl=require('../controllers/CategoriesCtl');

const passport=require('passport');

const Storage=multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null,"uploads/category/")
  },
  filename : (req,file,cb)=>{
    cb(null,file.fieldname+"-"+Date.now())
  }
})

const uploadspics=multer({storage:Storage}).single("img")


route.get("/addcat",passport.checkAuth,CategoriesCtl.addcat)
route.post("/insertaddcat",uploadspics,CategoriesCtl.insertaddcat)
route.get("/viewcat",passport.checkAuth,CategoriesCtl.viewcat)
route.get("/deletecat",CategoriesCtl.deletecat)
route.get("/editcat",passport.checkAuth,CategoriesCtl.editcat)
module.exports=route;