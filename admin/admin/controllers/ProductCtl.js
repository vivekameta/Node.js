const ProductModel=require('../model/ProductSchema');
const UserCatModel=require('../model/CategoriesSchema');
const UserSubCatModel = require('../model/SubCategoriesSchema');
const path=require('path')


module.exports.addview=async(req,res)=>{
  const catdata = await UserCatModel.find({})
  const subcatdata=await UserSubCatModel.find({})

  res.render("AddProduct",{catdata,subcatdata});
}

module.exports.insertProduct=async(req,res)=>{

  // console.log(req.file)

  req.body.img=req.file.path;
   

  let data = await ProductModel.create(req.body);
  data ? res.redirect("ViewProduct") : console.log("data not Show ....");
  
}


module.exports.viewproduct=async(req,res)=>{
   const viewdata =await ProductModel.find({}).populate('categoryId').populate('subcategoryId')

   viewdata ? res.render("ViewProduct",{viewdata}) : console.log("do not show data");
   
}