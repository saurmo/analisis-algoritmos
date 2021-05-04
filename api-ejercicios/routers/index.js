const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/users.controller");
const reports_controller = require("../controllers/reports.controller");
const base_controller = require("../controllers/base.controller");
const { reportDane } = require("../controllers/dane.controller");

router.get("/", base_controller.sendMessage);

router.get("/reportes/eps", reports_controller.getReportEps);
router.post("/reportes/dane", reportDane);

router.get("/usuarios", user_controller.getUsers);
router.get("/usuarios/:identificacion", user_controller.getUsers);
router.post("/usuarios", user_controller.saveUser);
router.post("/usuarios/documentos", user_controller.uploadDocument);
router.delete("/usuarios/:identificacion", user_controller.deleteUser);
router.put("/usuarios/:identificacion", user_controller.updateUser);

module.exports = router;
