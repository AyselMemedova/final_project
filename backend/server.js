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
