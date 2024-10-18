const mongoose=require('mongoose')

const db=mongoose.connect('mongodb://localhost:27017/Api-pr')
.then(()=>console.log("MondoDb Connected..."))
.catch((err)=>console.log(err))

module.exports=db;