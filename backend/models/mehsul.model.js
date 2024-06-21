const mongoose = require("mongoose");
const mehsulSchema = require('../schemas/mehsul.schema');


const MehsulModel = mongoose.model("Mehsular", mehsulSchema);

module.exports = MehsulModel;
