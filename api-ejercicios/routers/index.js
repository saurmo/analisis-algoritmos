const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/users.controller");

router.get("/usuarios", user_controller.getUsers);
router.post("/usuarios", user_controller.saveUser);
router.delete("/usuarios/:identificacion", user_controller.deleteUser);
router.put("/usuarios/:identificacion", user_controller.updateUser);

module.exports = router;
