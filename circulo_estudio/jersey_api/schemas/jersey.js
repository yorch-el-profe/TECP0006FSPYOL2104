const mongoose = require("mongoose");

const JerseySchema = new mongoose.Schema({
  color: String, // { type: String }
  talla: { type: String, enum: ["xs", "s", "m", "l", "xl"] },
  precio: Number, // { type: Number }
});

module.exports = mongoose.model("jerseys", JerseySchema);
