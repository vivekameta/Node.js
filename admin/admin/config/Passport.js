const passport=require('passport');

const localSt=require('passport-local').Strategy

const AdminSchema=require('../model/AdminSchema');

passport.use("local",new localSt(
  {usernameField : "email" },
  async(email,password,done)=>{

    let admindata= await AdminSchema.findOne({email : email});

    if(admindata){
        if(password==admindata.password){
          return done(null,admindata)
        }
        else {
          return done(null,false)
        }
    }
    else {
      return done(null,false)
    }
  }
))

passport.serializeUser((user,done)=>{
  return done(null,user.id);
})

passport.deserializeUser(async(id,done)=>{
  const admindata=await AdminSchema.findById(id);
  
 if(admindata){
  return done(null,admindata)
 }
 else {
  return done(null,false)
 }


})

passport.checkAuth=(req,res,next)=>{
  if(req.isAuthenticated()){
    next();
  }
  else {
    res.redirect("/")
  }
}

passport.setAuth=(req,res,next)=>{
  if(req.isAuthenticated()){
    res.locals.user = req.user
  }
  next()
}
module.exports=passport;