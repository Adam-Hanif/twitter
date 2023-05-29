const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  mail: String,
  saves: [{ type: mongoose.Schema.Types.ObjectId, ref: "Twitter" }],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
