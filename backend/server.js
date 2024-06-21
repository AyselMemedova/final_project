// const express = require("express");

const app= require('./config/index')
const bodyParser=require("body-paeser")
const cors = require("cors");
const router = require("./routes/index");

// const app = express();
// const mongoose = require("mongoose");
// require("dotenv").config();
// const { v4: uuidv4 } =require ("uuid");

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(router.blog);
app.use(router.user);
app.use(router.tag);
app.use(router.mehsul);

