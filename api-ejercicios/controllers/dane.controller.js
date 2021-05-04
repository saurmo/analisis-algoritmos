const { convertFile } = require("../services/csvtojson.service");
const { saveFile } = require("../services/fs.service");

/**
 *
 * @param {Request} req
 * @param {Response} res
 */
const reportDane = async (req, res) => {
  // Capturar el archivo
  let files = req.files;
  let csv = files.archivo_csv;
  // Guardar el archivos
  let path = "./docs";
  saveFile(`${path}/${csv.name}`, csv.data);
  // Extraer la info del archivo
  let info = await convertFile(`${path}/${csv.name}`);
  saveFile(`${path}/info.json`, JSON.stringify(info));
  // Hacer los calculos
  // Retornar los calculos
  return res.send(info);
};

module.exports = { reportDane };
