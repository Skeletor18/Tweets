const User = require("../models/User.model.js");

module.exports.usersController = {
  getUsers: async (req, res) => {
    try {
      const usersGet = await User.find();
      res.json(usersGet);
    } catch (err) {
      res.json(err);
    }
  },
  getUsersId: async (req, res) => {
    try {
      const userId = await User.findById(req.params.id);
      res.json(userId);
    } catch (err) {
      res.json(err);
    }
  },
  deleteUsers: async (req, res) => {
    try {
      const userDelete = await User.findByIdAndRemove(req.params.id);
      res.json(userDelete);
    } catch (err) {
      res.json(err);
    }
  },
  postUsers: async (req, res) => {
    const { name, save } = req.body;
    try {
      const userPost = await User.create({
        name,
        save,
      });
      res.json(userPost);
    } catch (err) {
      res.json(err);
    }
  },

  save: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user.seve.includes(req.body.tweet)) {
        const data = await User.findByIdAndUpdate(req.params.id, {
          $push: { save: req.body.tweet },
        });
        res.json(data);
      } else {
        const data = await User.findByIdAndUpdate(req.params.id, {
          $pull: { save: req.body.tweet },
        });
        res.json(data);
      }
    } catch (err) {
      res.json(err);
    }
  },
};
