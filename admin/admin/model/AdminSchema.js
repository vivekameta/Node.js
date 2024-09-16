const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
  fname : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
    unique : true,
  },
  password : {
    type : String,
    required : true,
  },
  msg : {
    type : String,
    required : true,
  },
  img : {
    type : String,
    required : true,
  },
});

const UserModel=mongoose.model("data",userSchema);

module.exports=UserModel