const { Router } = require("express");
const { userController } = require("../controllers/user.controllers");
const router = Router();

router.post("/user", userController.addUser); ///добавление User
router.get("/user", userController.getUser); /// Показать все Users
router.get("/user:id", userController.getUserById); /// Показать одного User
router.patch("/user:id", userController.getUserById); // Изменить User
router.delete("/user:id", userController.deleteUser); ///Удалить User
router.patch("/user/:id/saves/:twittId", userController.savedTwitt);
router.patch(
  "/user/:id/delete-saves/:twittId",
  userController.deleteSavedTwitt
);
module.exports = router;
