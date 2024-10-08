const mongoose=require('mongoose');

const productSchema=mongoose.Schema(
  {
    prname : {
      type : String,
      required : true,
    },
    prprice : {
      type : String,
      required : true,
    },
    subcategoryId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Sub-Categories",
      required :true,
    },
    categoryId : {
     type : mongoose.Schema.Types.ObjectId,
     ref : "Categories",
     required : true,
    },
    img:{
      type : String,
      required : true,
    }
  }
)

const ProductModel=mongoose.model("Products",productSchema);

module.exports=ProductModel;