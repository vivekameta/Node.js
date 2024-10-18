const manager = require("../Models/MangerSchema")
const employee = require("../Models/EmployeeSchema")
const jwt = require("jsonwebtoken")

const auth = async(req,res,next)=>{
    let token = req.header("Authorization");
    if(!token){
        return res.status(400).json({msg : "unauthorize user"});
        
    }
    let newtoken = token.slice(7,token.length);
    let decode = jwt.verify(newtoken,"node");

    let Man = await employee.findById(decode.userdata._id)
    if(!Man){
        return res.status(400).json({msg:"invalid employe"})
    }

    req.user = decode;
    
    next();
}

module.exports = auth;