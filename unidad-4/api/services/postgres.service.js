const { Pool } = require("pg")


class Postgres {

    constructor(conection_config) {
        this.pool_client = new Pool(conection_config)
        this.is_connected = false
    }

    async executeSQL(sql, data) {
        return await this.pool_client.query(sql, data)
    }

}

module.exports = Postgres