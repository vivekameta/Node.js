const express=require('express');

const route=express.Router();
const AdminCtl=require('../Controller/AdminCtl');

const AdminAuth=require('../Config/AdminAuth');

//admin//
route.post("/addadmin",AdminCtl.addAdmin)
route.post("/loginadmin",AdminCtl.loginAdmin)
route.get("/viewadmin",AdminAuth,AdminCtl.viewAdmin)
route.post("/changepassadmin",AdminCtl.changePassAdmin)
route.post("/forgetpassadmin",AdminCtl.forgetpassAdmin)
route.post("/verifyotp",AdminCtl.verifyOtp);
route.delete("/deleteadmin",AdminCtl.deleteAdmin)

// manager //
route.post("/addmanager",AdminCtl.addmanager);
route.get("/viewmanager",AdminCtl.viewmanager);
route.delete("/deletemanager",AdminCtl.deletemanager);

// employee // 

route.post("/addemployee",AdminCtl.addEmployee)
route.get("/viewemployee",AdminCtl.viewEmployee)
route.delete("/deleteemployee",AdminCtl.deleteEmployee)





module.exports=route; 