const jwt=require('jsonwebtoken')

const auth=(req,res,next)=>{
  
  let token=req.header("Authorization");

  if(!token){
    res.status(400).json({msg : "Token not Found"})
  }

  let newToken=token.slice(7,token.length)

  let decode=jwt.verify(newToken,"node")
  
  req.user=decode;
  console.log(req.user)
  next();

}

module.exports=auth;