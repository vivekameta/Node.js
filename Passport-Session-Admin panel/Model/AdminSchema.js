const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
  
   fullname : {
     type : String,
     required : true,
   },
   email : {
    type : String,
    required : true,
   },
   password : {
    type : String,
    required : true,
   },
   img : {
    type : String,
    required : true
   }
 
   
})

const UserModel=mongoose.model("data",UserSchema);

module.exports=UserModel;