const Comment = require("../models/Comment.model.js");
module.exports.commentController = {
  getComments: async (req, res) => {
    try {
      const commentGet = await Comment.find();
      res.json(commentGet);
    } catch (err) {
      res.json(err);
    }
  },
  getCommentsId: async (req, res) => {
    try {
      const commentId = await Comment.findById(req.params.id);
      res.json(commentId);
    } catch (err) {
      res.json(err);
    }
  },
  deleteComments: async (req, res) => {
    try {
      const commentDelete = await Comment.findByIdAndRemove(req.params.id);
      res.json(commentDelete);
    } catch (err) {
      res.json(err);
    }
  },
  postComments: async (req, res) => {
    const { user, tweet, content } = req.body;
    try {
      const commentPost = await Comment.create({
        user,
        tweet,
        content,
      });
      res.json(commentPost);
    } catch (err) {
      res.json(err);
    }
  },
  like: async (req, res) => {
    try {
      const tweets = await Comment.findById(req.params.id);
      if (!tweets.like.includes(req.body.user)) {
        const data = await Comment.findByIdAndUpdate(req.params.id, {
          $push: { like: req.body.user },
        });
        res.json(data);
      } else {
        const data = await Comment.findByIdAndUpdate(req.params.id, {
          $pull: { like: req.body.user },
        });
        res.json(data);
      }
    } catch (err) {
      res.json(err);
    }
  },
};
