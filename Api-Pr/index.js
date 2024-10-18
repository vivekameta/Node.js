const express=require('express');
const app=express();
const port=2024;

const db=require('./Config/Database');
const session=require('express-session');

app.use(express.urlencoded());

app.use(session({
  name : "api-demo",
  secret: 'keyboard',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge : 100 * 100 * 60 }
}))

app.use("/",require('./Routes/index'))

app.listen(port,()=>{
  console.log(`Server Started on port ${port}`)
})

