const Comment = require("../models/Comment");

module.exports.commentController = {
  addComment: async (req, res) => {
    try {
      const { text, twitt, user } = req.body;
      const comment = await Comment.create({
        text,
        user,
        twitt,
      });
      res.json(comment);
    } catch (error) {
      res.json({ error: "Ошибка при добавление Comment" });
    }
  },
  getComment: async (req, res) => {
    try {
      const comment = await Comment.find()
        .populate("user", "name")
        .populate("twitt");

      res.json(comment);
    } catch (error) {
      res.json({ error: "Ошибка при показе всех Comment" });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const comment = Comment.findByIdAndRemove(req.params.id);
      res.json(comment);
    } catch (error) {
      res.json({ error: "Ошибка при удаление Comment" });
    }
  },
  patchComment: async (req, res) => {
    try {
      const comment = await Comment.findByIdAndUpdate(req.params.id, req.body);
      res.json(comment);
    } catch (error) {
      res.json({ error: "Ошибка при изменение Comment" });
    }
  },
};
