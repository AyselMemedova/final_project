const mongoose = require("mongoose");

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
  

module.exports = mehsulSchema;
