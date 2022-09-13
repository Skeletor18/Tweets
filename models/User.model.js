const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  save: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet",
    },
  ],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
