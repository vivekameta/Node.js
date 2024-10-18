const express=require('express')
const route=express.Router();

const EmployeeCtl=require("../Controller/EmployeeCtl");
const EmployeeAuth=require("../Config/EmployeeAuth");


route.post("/loginemployee",EmployeeCtl.loginEmployee);
route.get("/viewemployee",EmployeeAuth,EmployeeCtl.viewEmployee)
route.post("/changepassemployee",EmployeeCtl.changePassEmployee)
route.post("/forgetpassemployee",EmployeeCtl.forgetpassEmployee)

route.post("/verifyotp",EmployeeCtl.verifyOtp)
route.delete("/deleteemployee",EmployeeCtl.deleteEmployee)


module.exports=route
