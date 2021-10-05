const CONFIG = require("../config/index.config")
const { excelStudents } = require("../services/excel.service")
const Postgres = require("../services/postgres.service")
const { saveBuffer } = require("./files.controller")
const { heapSort } = require("./heap-sort.controller")



const reporteEstudiantes = async (req, res) => {
    try {
        console.log('Reporte');
        let conection_config = {
            user: CONFIG.PG_USER,
            host: CONFIG.PG_HOST,
            database: CONFIG.PG_DATABASE,
            password: CONFIG.PG_PASSWORD,
            port: CONFIG.PG_PORT
        }
        let postgres = new Postgres(conection_config)
        let sql = "select * from estudiantes"
        let { rows } = await postgres.executeSQL(sql, [])
        let current_date = Date.now()
        console.log(current_date);
        let students = rows.map(x => {
            x.edad = Math.floor((current_date - Date.parse(x.fecha_nacimiento)) / (3600000 * 24 * 365))
            return x
        })
        students = heapSort(students)
        let buffer = await excelStudents(students)
        saveBuffer(buffer, "estudiantes.xlsx")

        let path_download = "http://localhost:3000/docs/temp/estudiantes.xlsx"
        res.send({ ok: true, message: "Estudiantes consultado", info: path_download, students })
    } catch (error) {
        console.log("error en peticion");
        res.status(400).send({ ok: false, message: "Estudiantes NO consultado" })
    }
}

module.exports = { reporteEstudiantes }