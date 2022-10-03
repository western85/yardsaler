const mongoose = require("mongoose");

const yardsaleSchema = {
  address: String,
  city: String,
  state: String,
  zip: Number,
  date: String,
};

const Yardsale = mongoose.model("Yardsale", yardsaleSchema);

module.exports = Yardsale;
