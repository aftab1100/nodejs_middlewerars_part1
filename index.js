//console.log('Its working');

//1. Import area
//const something = require(somelibarary);
const express = require("express");
const app = express();
require("dotenv").config();
//const config = require('dotenv');
//config();

//console.log(process.env.PORT);

//Middleware
//object.method(actual arguments)

//app.get(routename,middlewarefn1,middlwarefn2,...,cbfn);
app.get(
  "/students",
  (req, res, next) => {
    /* req.query.name="Aftab Ansari"; */
    console.log("inside middlewarefn1 ", req.query.name);
    //string.toUpperCase()
    req.query.name = req.query.name.toUpperCase();
    //req.query.name = "Aftab Ansari";
    next();
  },
  (req, res) => {
    //object.method(actual arguments)
    console.log("inside cbfn ", req.query.name);
    let name = req.query.name;
    res.json({ msg: `Hi ${name}` });
  }
);

let PORT = process.env.PORTNO;
app.listen(PORT, () => {
  console.log("The server is running on port " + PORT); // + concatincation operator
});
