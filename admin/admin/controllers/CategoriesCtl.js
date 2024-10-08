const UserCatModel=require('../model/CategoriesSchema');
const path=require('path')
const fs=require('fs')

module.exports.addcat=(req,res)=>{
  res.render("AddCategories");
}

module.exports.viewcat=async(req,res)=>{
  const data=await UserCatModel.find({});

  data ? res.render("ViewCategories",{data}) : console.log("data is not found in view");
  
}
module.exports.insertaddcat=async(req,res)=>{
  
  req.body.img=req.file.path;

  const data =await UserCatModel.create(req.body)

  data ? res.redirect("viewcat") : console.log("data not create");
  
}

module.exports.deletecat=async(req,res)=>{


  const singledata=await UserCatModel.findById(req.query.id);
  const imgpath=path.join(__dirname,"..",singledata.img)
  
    fs.unlinkSync(singledata.img)

    const deletedata=await UserCatModel.findByIdAndDelete(req.query.id)

  deletedata ? res.redirect("back") : console.log("delete not categories");
  
}

module.exports.editcat=async(req,res)=>{

  const editdata=await UserCatModel.findById(req.query.id);

  editdata ? res.render("EditCat",{editdata}) : console.log("Data can't Edit");
  

}

module.exports.updatecat=async(req,res)=>{
   
}

