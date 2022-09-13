const { Router } = require("express");
const router = Router();
const { usersController } = require("../controllers/users.controller");

router.get("/users", usersController.getUsers);
router.get("/users/:id", usersController.getUsersId);
router.delete("/users/:id", usersController.deleteUsers);
router.post("/users", usersController.postUsers);
router.patch('/users/save/:id',usersController.save)

module.exports = router;
