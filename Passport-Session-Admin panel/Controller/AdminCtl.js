
const UserModel=require('../Model/AdminSchema')
const path=require('path')
const fs=require('fs')

module.exports.Login=(req,res)=>{
  res.render("Login")
}
module.exports.userlogin=(req,res)=>{
  try {
   res.redirect("/dashboard")
  }
  catch (err){
    console.log(err);
    
  }
}

module.exports.logout=(req,res)=>{
  try{
    res.redirect("/");
  }
  catch(err){
    console.log(err);
    
  }
}

module.exports.dashboard=(req,res)=>{
  res.render("dashboard")
}

module.exports.AddForm=(req,res)=>{
  res.render("AddForm")
}

module.exports.ViewForm=async(req,res)=>{
  try {
    const data=await UserModel.find({})

   data ?  res.render("ViewForm",{data}) : console.log("data not Found...");
  
  }
  catch(err){
  console.log(err);
  
  }
}

module.exports.insserdata=async(req,res)=>{
  try {
    
    req.body.img=req.file.path;
    const data=await UserModel.create(req.body)
    console.log(req.body);
    
    data ? res.redirect("/ViewForm") : console.log("data not found");
    
  }
  catch(err){
console.log(err);

  }
}

module.exports.deletedata=async(req,res)=>{
  try {

    const singledata=await UserModel.findById(req.query.id);
      
    path.join(__dirname,"..",singledata.img)

    fs.unlinkSync(singledata.img)
  

     const deletedata=await UserModel.findByIdAndDelete(req.query.id);
     deletedata ? res.redirect("back") : console.log("User Cannot Delete");
     
  }
  catch (err){
    console.log(err);
    
  }
}

module.exports.EditForm=async(req,res)=>{
  try {

       const editdata=await UserModel.findById(req.query.id);

       editdata ? res.render("EditForm",{editdata}) : res.redirect("/")
       
  }
  catch(err){
     console.log(err);
     
  }
}

module.exports.Updatedata=async(req,res)=>{
  try{
    let image="";
    
    const singledata =await UserModel.findById(req.query.id);
    
     req.file ? image= req.file.path : image = singledata.img;

     if(req.file){
      fs.unlinkSync(singledata.img)
     }
    req.body.img=image
    


    const updatedata=await UserModel.findByIdAndUpdate(req.query.id,req.body)
    res.redirect("/ViewForm")
  }
  catch(err){
    console.log(err);
    
  }
}



