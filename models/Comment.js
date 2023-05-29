const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  text: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  twitt: { type: mongoose.Schema.Types.ObjectId, ref: "Twitter" },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
