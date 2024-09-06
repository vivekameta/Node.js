const express = require('express');

const db=require('./Config/database')


const port = 2010;
const path=require('path')

const app = express();

app.use(express.urlencoded())
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"images")))
app.use("/",require('./Routes/index'))

app.use("/uploads",express.static(path.join(__dirname,"uploads")));


app.listen(port,console.log(`Server Started on ${port}`));