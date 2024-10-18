const mongoose=require('mongoose');

const AdminSchema=mongoose.Schema({
  username : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
  },
  phone : {
    type : String,
    required : true,
  },
  password : {
    type : String,
    required : true,
  },
  createAt : {
    type : String,
    required : true,
  }

})

const AdminModel=mongoose.model("Admin-Api",AdminSchema);

module.exports=AdminModel;
