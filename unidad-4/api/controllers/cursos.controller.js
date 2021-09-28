
const guardarCurso = (req, res) => {
    res.send("Guardar Curso")
}

const consultarCursos = (req, res) => {
    res.send("Consultar Curso")

}

const modificarCurso = (req, res) => {
    res.send("Modificar Curso")

}

const eliminarCurso = (req, res) => {
    res.send("Eliminar Curso")

}

module.exports = { guardarCurso, consultarCursos, modificarCurso, eliminarCurso }

