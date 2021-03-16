const ExcelJS = require("exceljs");

const createExcel = async (headers, rows, nameSheet) => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet(nameSheet);
  sheet.columns = headers;
  sheet.addRows(rows);
  return await workbook.xlsx.writeBuffer();
};

module.exports = createExcel;
