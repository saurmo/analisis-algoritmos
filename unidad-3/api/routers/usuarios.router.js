const express = require('express') // Importar la libreria de express
const app = express.Router()

const controlador = require("../controllers/usuarios.controller")

// Enpoint crear usuario
app.post('/usuarios', (req, res) => {
    res.send("POST de usuarios")
})

// Endpoint consulta de usuarios
app.get('/usuarios', (req, res) => {
    controlador.consultarUsuarios().then(respuesta_controlador => {
 
        
        res.send(respuesta_controlador)
    }).catch(error => {
        console.log("error", error);
        
        res.send(error)
    })

})

app.put('/usuarios', (req, res) => {
    res.send("PUT de usuarios")
})

app.delete('/usuarios', (req, res) => {
    res.send("DELETE de usuarios")
})

module.exports = app