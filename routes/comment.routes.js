const { Router } = require("express");
const { commentController } = require("../controllers/comment.controllers");
const router = Router();

router.post("/comment", commentController.addComment); ///добавление Comment
router.get("/comment", commentController.getComment); /// Показать все Comment
router.patch("/comment:id", commentController.patchComment); // Изменить Comment
router.delete("/comment:id", commentController.deleteComment); ///Удалить Comment

module.exports = router;
