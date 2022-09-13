const Tweet = require("../models/Tweet.model.js");

module.exports.tweetsController = {
  getTweets: async (req, res) => {
    try {
      const tweetGet = await Tweet.find().populate("user", "name");
      res.json(tweetGet);
    } catch (err) {
      res.json(err);
    }
  },

  getTweetsId: async (req, res) => {
    try {
      const tweetId = await Tweet.findById(req.params.id).populate(
        "user",
        "name"
      );
      res.json(tweetId);
    } catch (err) {
      res.json(err);
    }
  },

  deleteTweets: async (req, res) => {
    try {
      const tweetDelete = await Tweet.findByIdAndRemove(req.params.id);
      res.json(tweetDelete);
    } catch (err) {
      res.json(err);
    }
  },

  postTweets: async (req, res) => {
    const { user, title, content } = req.body;
    try {
      const tweetPost = await Tweet.create({
        user,
        title,
        content,
      });
      res.json(tweetPost);
    } catch (err) {
      res.json(err);
    }
  },

  like: async (req, res) => {
    try {
      const tweets = await Tweet.findById(req.params.id);
      if (!tweets.like.includes(req.body.user)) {
        const data = await Tweet.findByIdAndUpdate(req.params.id, {
          $push: { like: req.body.user },
        });
        res.json(data);
      } else {
        const data = await Tweet.findByIdAndUpdate(req.params.id, {
          $pull: { like: req.body.user },
        });
        res.json(data);
      }
    } catch (err) {
      res.json(err);
    }
  },
};
