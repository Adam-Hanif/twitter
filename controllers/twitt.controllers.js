const Twitt = require("../models/Twitt");

module.exports.twittController = {
  addTwitt: async (req, res) => {
    try {
      const { text, user, likes } = req.body;
      const twitt = await Twitt.create({
        text,
        user,
        likes,
      });
      res.json(twitt);
    } catch (error) {
      res.json({ error: "Ошибка при добавление Twitt" });
    }
  },
  getTwitt: async (req, res) => {
    try {
      const twitt = await Twitt.find().populate("user", "name");
      res.json(twitt);
    } catch (error) {
      res.json({ error: "Ошибка при показе всех Twitt" });
    }
  },
  getTwittById: async (req, res) => {
    try {
      const twitt = await Twitt.findById(req.params.id);
      res.json(twitt);
    } catch (error) {
      res.json({ error: "Ошибка при показе Twitt" });
    }
  },
  likeTwitt: async (req, res) => {
    const changeTwitt = await Twitt.findByIdAndUpdate(req.params.id, {
      $push: { likes: req.params.userid },
    });
    res.send(changeTwitt);
  },
  deleteLikeTwitt: async (req, res) => {
    const deleteLikeTwitt = await Twitt.findByIdAndUpdate(req.params.id, {
      $pull: { saves: req.params.twittId },
    });
    res.send(deleteLikeTwitt);
  },
  deleteTwitt: async (req, res) => {
    try {
      const twitt = Twitt.findByIdAndRemove(req.params.id);
      res.json(twitt);
    } catch (error) {
      res.json({ error: "Ошибка при удаление Twitt" });
    }
  },
  patchTwitt: async (req, res) => {
    try {
      const twitt = await Twitt.findByIdAndUpdate(req.params.id, req.body);
      res.json(twitt);
    } catch (error) {
      res.json({ error: "Ошибка при изменение Twitt" });
    }
  },
};
