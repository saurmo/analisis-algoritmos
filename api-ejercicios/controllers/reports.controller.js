const _pg = require("../services/postgres.service");
const heapSort = require("../services/heap-sort.service");
const mergeSort = require("../services/merge-sort.service");
const createExcel = require("../services/excel.service");
const fs = require("fs");

const getReportEps = async (req, res) => {
  try {
    let sql = "SELECT * FROM usuarios where seguridad_social='SURA'";
    let response_db = await _pg.execute(sql);
    let rows = response_db.rows;

    // rows = heapSort(rows);
    rows = mergeSort(rows);

    let headers = [
      { header: "identificacion", key: "identificacion" },
      { header: "nombre", key: "nombre" },
      { header: "apellido", key: "apellido" },
      { header: "correo", key: "correo" },
      { header: "telefono", key: "telefono" },
      { header: "celular", key: "celular" },
      { header: "edad", key: "edad" },
      { header: "nivel_educacion", key: "nivel_educacion" },
      { header: "seguridad_social", key: "seguridad_social" },
      { header: "nucleo_familiar", key: "nucleo_familiar" },
      { header: "monto_inicial", key: "monto_inicial" },
    ];
    let buffer = await createExcel(headers, rows, "Personas SURA");
    fs.writeFileSync("./temp/reporte.xlsx", buffer);
    return res.download("./temp/reporte.xlsx", "personas-sura.xlsx");
  } catch (error) {
    console.error(error);
    return res.send(error);
  }
};

module.exports = { getReportEps };
