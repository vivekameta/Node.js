const express=require('express')
const route=express.Router();

const ManagerCtl=require("../Controller/MangerCtl")
const ManagerAuth=require("../Config/ManagerAuth");

// manager //

route.post("/loginmanager",ManagerCtl.loginmangar)
route.get("/viewmanager",ManagerAuth,ManagerCtl.viewmanager)
route.post("/changepassmanager",ManagerCtl.changepassmanager)
route.post("/forgetpassmanager",ManagerCtl.forgetpassmanager)
route.post("/verifyotp",ManagerCtl.verifyOtp);
route.delete("/deletemanager",ManagerCtl.deletemanager)

// employee // 

route.post("/addemployee",ManagerCtl.addEmployee)
route.get("/viewemployee",ManagerCtl.viewEmployee)
route.delete("/deleteemployee",ManagerCtl.deleteEmployee)




module.exports=route
