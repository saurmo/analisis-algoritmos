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

const saveUser = async (req, res) => {
  try {
    let user = req.body;
    let sql = `INSERT INTO public.usuarios
    (identificacion, nombre, apellido, correo, telefono, celular, edad, nivel_educacion, 
      seguridad_social, nucleo_familiar, monto_inicial)
    VALUES('${user.identificacion}', '${user.nombre}', '${user.apellido}', 
    '${user.correo}', '${user.telefono}', '${user.celular}', ${user.edad}, 
    '${user.nivel_educacion}', '${user.seguridad_social}', ${user.nucleo_familiar}, 0);
    `;

    await _pg.execute(sql);
    return res.send({
      ok: true,
      message: "Usuario creado",
      info: user,
    });
  } catch (error) {
    console.error(error);
    return res.send({
      ok: false,
      message: "Error al crear el usuario",
      info: error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    console.log(req.params);
    let identificacion = req.params.identificacion;
    let sql = `DELETE FROM public.usuarios WHERE identificacion='${identificacion}';`;
    let response_db = await _pg.execute(sql);
    console.log(response_db);
    let row_count = response_db.rowCount;
    return res.send({
      ok: row_count == 1 ? true : false,
      message: "Usuario eliminado",
      info: identificacion,
    });
  } catch (error) {
    console.error(error);
    return res.send({
      ok: false,
      message: "Error al eliminar el usuario",
      info: error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    let identificacion = req.params.identificacion;
    let user = req.body;
    let sql = `UPDATE public.usuarios
    SET nombre='${user.nombre}', apellido='${user.apellido}'
    WHERE identificacion='${identificacion}';
    `;
    let response_db = await _pg.execute(sql);
    let row_count = response_db.rowCount;
    return res.send({
      ok: row_count == 1 ? true : false,
      message: "Usuario actualizado",
      info: identificacion,
    });
  } catch (error) {
    console.error(error);
    return res.send({
      ok: false,
      message: "Error al actualizar el usuario",
      info: error,
    });
  }
};
const getusuarios = async (req, res) => {
  console.log("SANTIAGO URREGO");
  //usuarios
};

module.exports = { getUsers, saveUser, deleteUser, updateUser, getusuarios };
