const { Router } = require("express");
const router = Router();
const { commentController } = require("../controllers/comments.controller");

router.get("/comment", commentController.getComments);
router.get("/comment/:id", commentController.getCommentsId);
router.delete("/comment/:id", commentController.deleteComments);
router.post("/comment", commentController.postComments);

module.exports = router;
