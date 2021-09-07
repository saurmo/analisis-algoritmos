
const {ejecutarSql} = require('../services/postgres.service');

const consultarUsuarios =async  () => {
    const sql = "SELECT * FROM usuarios"
    const datos=[]
    let respuesta_db = await ejecutarSql(sql, datos)
    return respuesta_db.rows
}

module.exports={consultarUsuarios}