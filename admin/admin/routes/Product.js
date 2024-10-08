const express=require('express')

const Routes=express.Router();
const multer=require('multer');
const ProductCtl=require('../controllers/ProductCtl')
const passport=require('passport');
// const { default: mongoose } = require('mongoose');

const Storage=multer.diskStorage({
  destination : (req,file,cb)=>{
   cb(null,"uploads/products/")
  },
  filename : (req,file,cb) =>{
   cb(null,file.fieldname+"-"+Date.now())
  }
  
})

const uploadspics=multer({storage : Storage}).single("img")



Routes.get("/addproduct",passport.checkAuth,ProductCtl.addview)
Routes.post("/insertProduct",uploadspics,ProductCtl.insertProduct)
Routes.get("/viewproduct",passport.checkAuth,ProductCtl.viewproduct)

module.exports=Routes;