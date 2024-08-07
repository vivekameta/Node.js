const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

let data = [
  {
    id: 1,
    name: "vivek",
    email: "vivekameta111@gmail.com"
  },
  {
    id: 2,
    name: "Ayan",
    email: "Ayansangani111@gmail.com"
  }
];

app.get("/", (req, res) => {
  res.render("todolist");
});

app.get("/showdata", (req, res) => {
  res.render("showdata", {
    data
  });
});

app.post("/showdata", (req, res) => {
  const { id, name, email } = req.body;

  // if (!id || !name || !email) {
  //   res.render("showdata", {
  //     data,
  //     error: "Enter valid Details..."
  //   });
  // } else {
  //   const obj = {
  //     id: parseInt(id),
  //     name: name,
  //     email: email
  //   };
  //   data.push(obj);
  //   res.redirect("/showdata");
  // }

  const obj={
    id,
    name,
    email
  }
  data.push(obj);
  res.redirect("/showdata");
});

app.get("/deletedata", (req, res) => {
  const id = parseInt(req.query.userid);

  const vdata = data.filter((el) => {
    return el.id !== id
  });
  data=vdata
  res.redirect("back");
});

app.get("/updatedata", (req, res) => {
  const id = parseInt(req.query.editid);

  const newdata = data.find(el => el.id === id);

  // res.send(newdata)
  console.log(newdata)

 res.render("Editdata",{
  data:newdata
 })
 
});

app.post("/updatedata", (req, res) => {
  const { id, name, email } = req.body;

  const student_id = parseInt(id);

  const student = data.find(el => el.id === student_id);

  student.id=student_id;
 student.name=name;
  student.email=email;

  res.redirect("/showdata");
});

app.listen(9090, () => console.log("Server Started by port 9090"));