const Usermodel=require('../model/movieSchema')

const path=require('path')

const fs=require('fs');

module.exports.home=async(req,res)=>{
   try{
      const data=await Usermodel.find({})
      res.render("index",{data});
   }
   catch(err){
  console.log(err);
  
   }
  
}

module.exports.adddata=async(req,res)=>{
   try {
      res.render("Adddata")
   }
   catch (err) {
    console.log(err);
    
   }
   
}

module.exports.insserdata=async(req,res)=>{
   try {

      req.body.image=req.file.path;

      const data=await Usermodel.create(req.body)
      console.log(req.body);
      res.redirect("/")
      
   }
   catch (err) {
   console.log(err);
   
   }
}

module.exports.deletedata=async(req,res)=>{
   try {

      const singledata=await Usermodel.findById(req.query.id);
       const imgpath=path.join(__dirname,'..',singledata.image)
       
       fs.unlinkSync(singledata.image)

        const deldata=await Usermodel.findByIdAndDelete(req.query.id)
        res.redirect("back")
   }
   catch (err) {
     console.log(err);
     
   }
}

module.exports.editdata=async(req,res)=>{
   try{
    const editdata=await Usermodel.findById(req.query.id);
    res.render("editdata",{editdata})
   }
   catch(err) {
     console.log(err);
     
   }
}


module.exports.updatedata=async(req,res)=>{
   try{

      let img="";

      let singledata = await Usermodel.findById(req.query.id);

      req.file ? img = req.file.path : img= singledata.image;

      if(req.file){
        fs.unlinkSync(singledata.image)
      }

      req.body.image = img;

     const updatedata=await Usermodel.findByIdAndUpdate(req.query.id,req.body)
     console.log(req.body);
     res.redirect("/")
     
   }
   catch(err){
console.log(err);

   }
}







