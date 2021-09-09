const express = require('express') // Importar la libreria de express
const app = express()  // Inicializar el express
const port = 3000

// Endpoint hello world 
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Importar usuarios router
const usuarios_router = require("./routers/usuarios.router")
app.use(usuarios_router)

// Importar estudiantes router
const estudiantes_router = require("./routers/estudiantes.router")
app.use(estudiantes_router)

// Levantar el servicio para escuchar las solicitudes (request-req)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})