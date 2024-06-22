const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()


const CONNECTION_STRING = process.env.CONNECTION_STRING

const connectDB = async () =>{
  try {
    await mongoose.connect(CONNECTION_STRING)
    console.log("connect db");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDB