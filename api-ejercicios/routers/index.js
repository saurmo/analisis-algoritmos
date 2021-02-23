const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/users.controller");

router.get("/usuarios", user_controller.getUsers);

module.exports = router;
