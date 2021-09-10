const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: String,
  actors: [String],
  picture: String,
});

module.exports = mongoose.model("movies", MovieSchema);
