
const { ejecutarSql } = require('../services/postgres.service');

const consultarEstudiantes = async () => {
    const sql = "SELECT * FROM estudiantes"
    const datos = []
    let respuesta_db = await ejecutarSql(sql, datos)
    return respuesta_db.rows
}

const generarNotas = async () => {
    let estudiantes = await consultarEstudiantes()

    const sql = "INSERT INTO public.notas (id_estudiante, nota, id_curso) VALUES($1, $2, $3);"

    for (let index = 0; index < estudiantes.length; index++) {
        try {
            let estudiante = estudiantes[index];
            let nota = Math.random() * 10
            let curso = Math.floor( Math.random() * 1000)
            let datos = [estudiante.id, nota, curso]
            await ejecutarSql(sql, datos)
            console.log(index, estudiante.id);
        } catch (error) {
            // console.log(error);
        }
    }
}


module.exports = { consultarEstudiantes, generarNotas }