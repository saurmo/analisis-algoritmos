
const { Pool } = require('pg');

let POOL_PG = null

const conectarDb = async () => {
    POOL_PG = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'universidad',
        password: 'admin123',
        port: 5432,
    })
    return await POOL_PG.connect()
}

const ejecutarSql = async (sql, datos) => {
    let pool = null
    if (POOL_PG == null) {
        pool = await conectarDb()
    } else {
        pool = POOL_PG
    }
console.log(pool);

    const respuesta_db = await pool.query(sql, datos)
    return respuesta_db
}

module.exports = { ejecutarSql }