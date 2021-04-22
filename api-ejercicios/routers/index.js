const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/users.controller");
const reports_controller = require("../controllers/reports.controller");

router.get("/reportes/eps", reports_controller.getReportEps);

router.get("/usuarios", user_controller.getUsers);
router.get("/usuarios/:identificacion", user_controller.getUsers);
router.post("/usuarios", user_controller.saveUser);
router.post("/usuarios/documentos", user_controller.uploadDocument);
router.delete("/usuarios/:identificacion", user_controller.deleteUser);
router.put("/usuarios/:identificacion", user_controller.updateUser);

module.exports = router;
