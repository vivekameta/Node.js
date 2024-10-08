const express=require('express');
const route=express.Router();

const SubCategoriesCtl=require("../controllers/SubCategoriesCtl");

route.get("/addsubcat",SubCategoriesCtl.addsubcat);
route.post("/addsubcat2",SubCategoriesCtl.addsubcat2);
route.get("/viewsubcat",SubCategoriesCtl.viewsubcat)
module.exports=route;