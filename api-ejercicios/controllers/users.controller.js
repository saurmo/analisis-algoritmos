const _pg = require("../services/postgres.service");

const getUsers = (req, res) => {
  //_pg.execute()
  return res.send(" - Usuarios Controlador");
};

module.exports = { getUsers };
