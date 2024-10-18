const EmployeeModel=require('../Models/EmployeeSchema')

const bcrypt=require('bcrypt');
const moment=require('moment');
const jwt=require('jsonwebtoken')

const mailer=require("../Config/Mailer");
const session = require('express-session');



module.exports.loginEmployee=async(req,res)=>{
 
  const user=await EmployeeModel.findOne({email : req.body.email})

  if(user){
    if(await bcrypt.compare(req.body.password,user.password)){
      const token=jwt.sign({userdata : user},"node",{expiresIn : "1h"});
      res.status(404).json({msg : `Login successfully by ${user.username}`,token : token})

    }else {
       res.status(404).json({msg : "Wrong Password..."})
    }
  } else {
    res.status(404).json({msg : "User not Found"})
  }

}

module.exports.viewEmployee=async(req,res)=>{
  const data=await EmployeeModel.find({})

  data ? res.status(200).json({admindata : data}) : res.status(404).json({msg : "Data not Found..!!"})
}

module.exports.changePassEmployee=async(req,res)=>{
 
  const user=await EmployeeModel.findOne({email : req.body.email})


  if(user){
    const isMatch=await bcrypt.compare(req.body.password,user.password)

    if(isMatch){
      const newpass=await bcrypt.hash(req.body.newpass,10);
      user.password=newpass;
      await user.save();
      res.status(202).json({msg : "Password Successfully Changed...!!!"});
    } else {
      res.status(404).json({msg : "Password Not Changed...!!"})
    }
  }
  else{
    res.status(404).json({msg : "User Not Found"})
  }

}

module.exports.forgetpassEmployee=async(req,res)=>{

  console.log(req.body)
 
  let user=await EmployeeModel.findOne({email : req.body.email});

  console.log(user)
  
  
 if(user){
  let otp=Math.floor(Math.random()*100000+800000)
  const adminId=user.id;
 
  mailer.sendOtp(req.body.email,otp);
 
  req.session.otp=otp;
  req.session.adminId =adminId;

  res.status(202).json({msg : "OTP Sent to your email...!!"})
  
  console.log(req.session.otp)
 }
 else{
  res.status(404).json({msg : "User data not Found...!!"})

 }
  
 
}  

module.exports.verifyOtp=async(req,res)=>{
  const otp=req.body.otp;
  const newpass=req.body.newpass
  const confirmpass =req.body.confirmpass;

  let adminId=req.session.adminId;


  console.log(req.session.otp)
  console.log(adminId)
  console.log(req.body)


  if(req.session.otp==otp){
    if(newpass==confirmpass){
      const hashedpass=await bcrypt.hash(newpass,10);

      const newupdatepass=await EmployeeModel.findByIdAndUpdate(adminId,{password : hashedpass}) 

      newupdatepass ? res.status(200).json({ msg: "Password updated successfully" }) : 
      res.status(404).json({ msg: "Password can't be updated try again...!!" });

    }
    else {
      return res.status(400).json({ msg: "new paasword and confirmpassword is same" });
    }
  } else {
    return res.status(400).json({ msg: "Invalid OTP" });

  }


}

module.exports.deleteEmployee=async(req,res)=>{
  const user=await EmployeeModel.findByIdAndDelete(req.query.id)
  console.log(req.query.id)
  user ? res.status(200).json({msg : "Employee deleted..."}) : res.status(404).json({msg : "Employee not deleted"});
  
}


