const express=require('express');
const port=8080;
const db=require('./Config/database');

const UserModel=require('./Model/AdminSchema');
const path=require("path");

const AdminSchema=require('./Model/AdminSchema');
const session=require('express-session')
const localSt=require('./Config/passport');

const passport=require('passport')

const app=express();



app.set("view engine","ejs");
app.use(express.urlencoded())

app.use(session({
  name : "task",
  secret: 'keyboard',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge : 100*100*60 }
}))

app.use(passport.initialize());
app.use(passport.session());

const routes=require('./Routes/index')
app.use(passport.setAuth)
app.use("/",routes)

app.use(express.static(path.join(__dirname,"Public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.listen(port,console.log(`Server Started on port ${port}`));