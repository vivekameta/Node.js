const express=require('express');

const route=express.Router();

route.use("/admin",require('./admin'));
route.use("/manager",require('./Manager'));
route.use("/employee",require("./Employee"))

module.exports=route;