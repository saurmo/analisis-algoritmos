
const guardarEstudiante = (req, res) => {
    res.send({mensaje:"Guardar Estudiante"})
}

const consultarEstudiantes = (req, res) => {
    res.status(200).send({mensaje:"Consultar Estudiante"})
    
}

const modificarEstudiante = (req, res) => {
    res.send("Modificar Estudiante")
    
}

const eliminarEstudiante = (req, res) => {
    res.send("Eliminar Estudiante")
    
}

module.exports= {guardarEstudiante, consultarEstudiantes, modificarEstudiante, eliminarEstudiante}

