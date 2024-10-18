
const mongoose=require('mongoose');

const EmployeeSchema=mongoose.Schema({
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

const EmployeeModel=mongoose.model("Employee-Api",EmployeeSchema);

module.exports=EmployeeModel;
