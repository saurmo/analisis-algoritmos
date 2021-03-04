const _pg = require("../services/postgres.service");
const {
  calcularInteresesR,
  calcularInteresesE,
} = require("../services/intereses.service");

const getUsers = async (req, res) => {
  try {
    let sql = "SELECT * FROM usuarios";
    let response_db = await _pg.execute(sql);
    let rows = response_db.rows;

    rows.forEach((usuario) => {
      let monto_inicial = parseFloat(
        usuario.monto_inicial.replace("$", "").replace(",", "").replace(",", "")
      );
      usuario.intereses = calcularInteresesR(15, monto_inicial);
    });

    return res.send(rows);
  } catch (error) {
    console.error(error);
    return res.send(error);
  }
};

module.exports = { getUsers };
