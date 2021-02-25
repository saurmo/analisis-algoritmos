const _pg = require("../services/postgres.service");

const getUsers = async (req, res) => {
  try {
    let sql = "SELECT * FROM usuarios";
    let response_db = await _pg.execute(sql);
    let rows = response_db.rows;
    return res.send(rows);
  } catch (error) {
    console.error(error);
    return res.send(error);
  }
};

module.exports = { getUsers };
