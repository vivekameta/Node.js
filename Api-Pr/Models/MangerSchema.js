
const mongoose=require('mongoose');

const MangerSchema=mongoose.Schema({
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

const MangerModel=mongoose.model("Manger-Api",MangerSchema);

module.exports=MangerModel;
