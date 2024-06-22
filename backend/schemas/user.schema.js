const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {type :String , unique : true},
    username: String  ,
    password: String,
    src: String,
    role: {
      type: String,
      enum: ['admin','super-admin','client','journalist'],
    },
    isBanned: {
      type: Boolean,
      default: false
    },
    banDate: {
      type: Date || null,
      default: null
    },
    banCount: {
      type: Number,
      default: 0
    },
    favorites: Array,
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = userSchema;