const ExcelJS = require('exceljs');

const excelStudents =async (students) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Estudiantes');

    worksheet.columns = [
        { header: 'Identificación', key: 'id', width: 10 },
        { header: 'Nombres', key: 'nombres', width: 32 },
        { header: 'Apellidos', key: 'apellidos', width: 32 },
        { header: 'Correo', key: 'correo' },
        { header: 'Fecha nacimiento', key: 'fecha_nacimiento' },
        { header: 'Edad', key: 'edad' }
    ];
    // add new rows and return them as array of row objects
    worksheet.addRows(students);
    const buffer = await workbook.xlsx.writeBuffer();
    return buffer
}

module.exports = { excelStudents }