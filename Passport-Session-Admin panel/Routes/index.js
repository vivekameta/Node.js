const express=require('express');

const routes=express.Router();
const passport=require('passport')


const AdminCtl=require('../Controller/AdminCtl');

const multer=require('multer');

const Storage=multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null,"uploads/")
  },
  filename : (req,file,cb) =>{
    cb(null,file.fieldname+'-'+Date.now())
  }
})

const UploadsPic=multer({storage : Storage}).single("img")

routes.get("/",AdminCtl.Login)
routes.get("/AddForm",passport.checkAuth,AdminCtl.AddForm)
routes.get("/ViewForm",passport.checkAuth,AdminCtl.ViewForm)
routes.post("/insserdata",UploadsPic,AdminCtl.insserdata)
routes.get("/deletedata",AdminCtl.deletedata);
routes.get("/editdata",AdminCtl.EditForm);
routes.post("/updatedata",UploadsPic,AdminCtl.Updatedata);
routes.get("/dashboard",passport.checkAuth,AdminCtl.dashboard)
routes.post("/userlogin",passport.authenticate("local",{failureRedirect : "/"}),AdminCtl.userlogin);
routes.get("/Logout",AdminCtl.Logout)



module.exports=routes;
