const express = require('express') // Importar la libreria de express
const app = express.Router()

const controlador = require("../controllers/estudiantes.controller")

// Endpoint consulta de usuarios
app.get('/estudiantes', (req, res) => {
    controlador.consultarEstudiantes().then(respuesta_controlador => {
        res.send(respuesta_controlador)
    }).catch(error => {
        console.log("error", error);
        res.send(error)
    })
})

app.get('/generar-notas', (req, res) => {
    controlador.generarNotas().then(respuesta_controlador => {
        res.send(respuesta_controlador)
    }).catch(error => {
        res.send(error)
    })
})


module.exports = app