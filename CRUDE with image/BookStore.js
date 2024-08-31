const express=require("express");
const db=require("./config/database");
const Usermodal=require("./model/datamodal");

// multer //
const multer=require("multer");
// multer //

const path =require("path")

const port=6005;
 
const app=express();

app.set("view engine","ejs");
app.use(express.urlencoded());


const Storage = multer.diskStorage({
  destination : (req,file,cb)=>{
     cb(null,"uploads/");
  },
  filename : (req,file,cb)=>{
     cb(null,file.fieldname+"-"+Date.now());
  }
})

const uploadPic= multer({storage : Storage}).single("image");

app.use(express.static(path.join(__dirname,"uploads")));


app.get("/",(req,res)=>{
 res.render("BookStore");
});

app.get("/showdata",async(req,res)=>{
  const data= await Usermodal.find({})

  data ?  res.render("Showdata",{data}) : console.log("data not show");
});

app.post("/insserdata", uploadPic ,async(req,res)=>{

  // console.log(req.body)
   
  req.body.image = req.file.filename

  console.log(req.file)

  const data = await Usermodal.create(req.body);

  data ? res.redirect("/showdata") : console.log("mongodb not found data");


});

app.get("/deletdata",async(req,res)=>{

   const deldata=await Usermodal.findByIdAndDelete(req.query.id);

   deldata ? res.redirect("back") : console.log("data not deleted");

});

app.get("/editdata",async(req,res)=>{
   const update = await Usermodal.findById(req.query.id);

   update ? res.render("Update",{update}) : console.log("data not found");
})

app.post("/updatedata",async(req,res)=>{
  const data=await Usermodal.findByIdAndUpdate(req.query.id,req.body)

  data ? res.redirect("/showdata") : console.log("Data not update");

})

app.listen(port,()=>{
  console.log(`Server Started on port ${port}`);
})
