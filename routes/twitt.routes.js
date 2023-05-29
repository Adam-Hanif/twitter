const { Router } = require("express");
const { twittController } = require("../controllers/twitt.controllers");
const router = Router();

router.post("/twitt", twittController.addTwitt); ///добавление Twitt
router.get("/twitt", twittController.getTwitt); /// Показать все Twitt
router.get("/twitt/:id", twittController.getTwittById); /// Показать 1 Twitt
router.patch("/twitt/:id", twittController.getTwittById); // Изменить Twitt
router.delete("/twitt/:id", twittController.deleteTwitt); ///Удалить Twitt
router.patch("/twitt/:id/like/:userid", twittController.likeTwitt);
router.patch("/twitt/:id/delete-like/:userid", twittController.deleteLikeTwitt);

module.exports = router;
