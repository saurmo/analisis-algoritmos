
const express = require('express');
const router = express.Router()

const estudiante_controller = require("../controllers/estudiantes.controller")
const curso_controller = require("../controllers/cursos.controller");
const { reporteNotas } = require('../controllers/notas.controller');
const { reporteEstudiantes } = require('../controllers/reporte_estudiantes.controller');

router.get("/test-estudiantes", estudiante_controller.testEstudiante)

router.post("/estudiantes", estudiante_controller.guardarEstudiante)
    .get("/estudiantes", estudiante_controller.consultarEstudiantes)
    .delete("/estudiantes/:id", estudiante_controller.eliminarEstudiante)
    .put("/estudiantes/:id", estudiante_controller.modificarEstudiante)

router.post("/cursos", curso_controller.guardarCurso)
    .get("/cursos", curso_controller.consultarCursos)
    .delete("/cursos/:id", curso_controller.eliminarCurso)
    .put("/cursos/:id", curso_controller.modificarCurso)

router.get("/reportes/notas", reporteNotas)
    .get("/reportes/estudiantes", reporteEstudiantes)



module.exports = router

