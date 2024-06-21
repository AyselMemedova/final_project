const mongoose = require("mongoose");
// require("dotenv").config();
// dotenv.config();
const express = require("express");
const app = express();

// const PORT=process.env.PORT

mongoose
.connect(process.env.CONNECTION_STRING)
.then((resp) => {
  console.log("db connected");
})
.catch((error) => {
  console.log("db not connected");
});

app.listen(process.env.PORT, (req, res) => {
    console.log(" api running");
  });

  module.exports=app;