const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const mehsulSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    haqqinda: String,
    haqqindaki: String,
    haqqindauc: String,
    count: Number,
    totalPrice: Number,
  });
  
  const Mehsular = mongoose.model("Mehsular", mehsulSchema);

  app.get("/api/mehsular", async (req, res) => {
    const resp = await Mehsular.find();
    res.send(resp);
  });
  
  app.post("/api/mehsular", async (req, res) => {
    // const { title, price, image, description, count, totalPrice } = req.body;
    // const newmehsular = new mehsular({
    //   title: title,
    //   price: price,
    //   image: image,
    //   description: description,
    //   count: count,
    //   totalPrice: totalPrice,
    // });
    const newMehsular=new Mehsular(req.body)
    await newMehsular.save();
    res.send("item elave olundu");
  });
  
  app.put("/api/mehsular/:id", async (req, res) => {
    const { id } = req.params;
    const resp = await Mehsular.findByIdAndUpdate(id, { ...req.body });
    res.send("updated");
  });
  
  app.delete("/api/mehsular/:_id", async (req, res) => {
    const { _id } = req.params;
    const resp = await Mehsular.findByIdAndDelete(_id);
    res.send("delete");
  });


app.listen(process.env.PORT, (req, res) => {
    console.log(" api running");
  });
  mongoose
    .connect(process.env.CONNECTION_STRING)
    .then((resp) => {
      console.log("db connected");
    })
    .catch((error) => {
      console.log("db not connected");
    });