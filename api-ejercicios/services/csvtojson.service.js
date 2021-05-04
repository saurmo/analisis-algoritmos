const csv = require("csvtojson");

const convertFile = async (path) => {
  const jsonArray = await csv({ delimiter: ";" }).fromFile(path);
  return jsonArray;
};
module.exports = { convertFile };
