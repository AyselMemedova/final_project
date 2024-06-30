const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors");
const router = require("./routes/index");
const connectDB = require("./config/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(router.blog);
app.use(router.user);
app.use(router.tag);
app.use(router.mehsul);


const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  await connectDB()
  console.log(`Server running on port salam ${PORT}`);
});


// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const router = require("./routes/index");
// const connectDB = require("./config/index");

// const mongoose = require("mongoose");
// require("dotenv").config();

// app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.use(router.blog);
// app.use(router.user);
// app.use(router.tag);
// app.use(router.mehsul);
// // app.use(router.sekil);

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, async () => {
//   await connectDB();
//   console.log(`Server running on port salam ${PORT}`);
// });

// const sekilSchema = mongoose.Schema({
//   title: String,
//   ingridient: String,
//   Preperation: String,
//   Vegetables: String,
//   icindekiler: String,
//   Dressing: String,
//   yaglar: String,
//   text: String,
//   description: String,
//   enjoy: String,
//   price: Number,
//   image: String,
//   count: Number,
//   totalPrice: Number,
// });

// const sekil = mongoose.model("sekil", sekilSchema);

// app.get("/api/sekil", async (req, res) => {
//   const resp = await sekil.find();
//   res.send(resp);
// });

// app.post("/api/sekil", async (req, res) => {
//   const {
//     title,
//     ingridient,
//     Preperation,
//     Vegetables,
//     icindekiler,
//     Dressing,
//     yaglar,
//     text,
//     description,
//     enjoy,
//     price,
//     image,
//     count,
//     totalPrice,
//   } = req.body;
//   const newsekil = new sekil({
//     title: title,
//     ingridient: ingridient,
//     Preperation: Preperation,
//     Vegetables: Vegetables,
//     icindekiler: icindekiler,
//     Dressing: Dressing,
//     yaglar: yaglar,
//     text: text,
//     description: description,
//     enjoy: enjoy,
//     price: price,
//     image: image,
//     count: count,
//     totalPrice: totalPrice,
//   });
//   await newsekil.save();
//   res.send("item elave olundu");
// });

// app.put("/api/sekil/:id", async (req, res) => {
//   const { id } = req.params;
//   const resp = await sekil.findByIdAndUpdate(id, { ...req.body });
//   res.send("updated");
// });

// app.delete("/api/sekil/:id", async (req, res) => {
//   const { id } = req.params;
//   const resp = await sekil.findByIdAndDelete(id, { ...req.body });
//   // await sekil.save();
//   res.send("delete");
// });

// app.listen(process.env.PORT, (req, res) => {
//   console.log(" api running");
// });
// mongoose
//   .connect(process.env.CONNECTION_STRING)
//   .then((resp) => {
//     console.log("db connected");
//   })
//   .catch((error) => {
//     console.log("db not connected");
//   });

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const router = require("./routes/index");
// const connectDB = require("./config/index");

// const mongoose = require("mongoose");
// require("dotenv").config();

// app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.use(router.blog);
// app.use(router.user);
// app.use(router.tag);
// app.use(router.mehsul);
// // app.use(router.sekil);

// const sekilSchema = mongoose.Schema({
//   title: String,
//   ingridient: String,
//   Preperation: String,
//   Vegetables: String,
//   icindekiler: String,
//   Dressing: String,
//   yaglar: String,
//   text: String,
//   description: String,
//   enjoy: String,
//   price: Number,
//   image: String,
//   count: Number,
//   totalPrice: Number,
// });

// const sekil = mongoose.model("sekil", sekilSchema);

// app.get("/api/sekil", async (req, res) => {
//   const resp = await sekil.find();
//   res.send(resp);
// });

// app.post("/api/sekil", async (req, res) => {
//   const {
//     title,
//     ingridient,
//     Preperation,
//     Vegetables,
//     icindekiler,
//     Dressing,
//     yaglar,
//     text,
//     description,
//     enjoy,
//     price,
//     image,
//     count,
//     totalPrice,
//   } = req.body;
//   const newsekil = new sekil({
//     title: title,
//     ingridient: ingridient,
//     Preperation: Preperation,
//     Vegetables: Vegetables,
//     icindekiler: icindekiler,
//     Dressing: Dressing,
//     yaglar: yaglar,
//     text: text,
//     description: description,
//     enjoy: enjoy,
//     price: price,
//     image: image,
//     count: count,
//     totalPrice: totalPrice,
//   });
//   await newsekil.save();
//   res.send("item elave olundu");
// });

// app.put("/api/sekil/:id", async (req, res) => {
//   const { id } = req.params;
//   await sekil.findByIdAndUpdate(id, { ...req.body });
//   res.send("updated");
// });

// app.delete("/api/sekil/:id", async (req, res) => {
//   const { id } = req.params;
//   await sekil.findByIdAndDelete(id);
//   res.send("deleted");
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, async () => {
//   await connectDB();
//   console.log(`Server running on port ${PORT}`);
// });

// mongoose
//   .connect(process.env.CONNECTION_STRING)
//   .then(() => {
//     console.log("db connected");
//   })
//   .catch((error) => {
//     console.log("db not connected", error);
//   });
