const User = require("../models/User");

module.exports.userController = {
  addUser: async (req, res) => {
    try {
      const { name, saves } = req.body;
      const user = await User.create({
        name,
        saves,
      });
      res.json(user);
    } catch (error) {
      res.json({ error: "Ошибка при добавление User" });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.json({ error: "Ошибка при показе всех User" });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.json({ error: "Ошибка при показе User" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = User.findByIdAndRemove(req.params.id);
      res.json(user);
    } catch (error) {
      res.json({ error: "Ошибка при удаление User" });
    }
  },
  patchUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
      res.json(user);
    } catch (error) {
      res.json({ error: "Ошибка при изменение User" });
    }
  },
  savedTwitt: async (req, res) => {
    const savedTwitt = await User.findByIdAndUpdate(req.params.id, {
      $push: { saves: req.params.twittId },
    });
    res.json(savedTwitt);
  },
  deleteSavedTwitt: async (req, res) => {
    const deleteSavedTwitt = await User.findByIdAndUpdate(req.params.id, {
      $pull: { saves: req.params.twittId },
    });
    res.json(deleteSavedTwitt);
  },
};
