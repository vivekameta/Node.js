const mongoose =require('mongoose');


const userSchema=mongoose.Schema({
  name : {
    type : String,
    required : true,
  },
  image : {
    type : String,
    required : true,
  },
  rating : {
    type : String,
    required : true,
  },
  views : {
    type : String,
    required : true,
  },
  R_date : {
    type : Date,
    required : true,
  },
});

const Usermodel=mongoose.model("data",userSchema);

module.exports=Usermodel;