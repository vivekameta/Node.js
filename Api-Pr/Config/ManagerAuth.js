const jwt=require('jsonwebtoken');
const manager=require('../Models/MangerSchema')
const employee=require('../Models/EmployeeSchema')


const auth=async(req,res,next)=>{
 
  const token=await req.header('Authorization')

  if(!token) {
    res.status(404).json({msg : "Token Not Found...."})
  }

  const newtoken=token.slice(7,token.length);

  let decode=jwt.verify(newtoken,"node")

  
  let Man=await manager.findById(decode.userdata._id)
  
  let Emp=await employee.findById(decode.userdata._id)

  if(!Man && !Emp){
    return res.status(404).json({msg : "Invaild Manager And Employee try again...!!"});
  }

  req.user=decode;

  next();
 
  
}

module.exports=auth;