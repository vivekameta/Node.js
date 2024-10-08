const SubCategoriesSchema=require('../model/SubCategoriesSchema');
const CategoriesSchema=require('../model/CategoriesSchema')

module.exports.addsubcat=async(req,res)=>{
  const data=await CategoriesSchema.find({})
  data ?  res.render("AddSubCat",{data}) : console.log("Subcat data not Found");
  
}
module.exports.addsubcat2=async(req,res)=>{
   const data =await SubCategoriesSchema.create(req.body);
   data ? res.redirect("ViewSubcat") : console.log("data not create");
    

}

module.exports.viewsubcat=async(req,res)=>{
  const data=await SubCategoriesSchema.find({}).populate("categoriesId")
  data ? res.render("ViewSubcat",{data}) : console.log("Don't Show data in subcat");
  
}