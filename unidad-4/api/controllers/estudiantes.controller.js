
const guardarEstudiante = (req, res) => {
    res.send({mensaje:"Guardar Estudiante"})
}

const consultarEstudiantes = (req, res) => {
    console.log("consultar estudiante");
    res.status(200).send({mensaje:"Consultar Estudiante"})
    
}

const modificarEstudiante = (req, res) => {
    res.send("Modificar Estudiante")
    
}

const eliminarEstudiante = (req, res) => {
    res.send("Eliminar Estudiante")
    
}

const testEstudiante=(req, res) => {
    res.send("Hola Mundo")
    
}
module.exports= {guardarEstudiante, testEstudiante, consultarEstudiantes, modificarEstudiante, eliminarEstudiante}

