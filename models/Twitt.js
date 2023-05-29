const mongoose = require("mongoose");

const twittSchema = mongoose.Schema({
  text: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Twitter = mongoose.model("Twitter", twittSchema);
module.exports = Twitter;
