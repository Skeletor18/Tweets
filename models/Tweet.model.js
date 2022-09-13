const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  content: String,
  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
