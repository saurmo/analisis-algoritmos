


const consultarReporteEstudiantes = () => {
    console.log('Reporte de estudiantes');
    let tabla = document.getElementById('tabla_estudiantes')
    console.log(tabla);
    let url = 'http://localhost:3000/reportes/estudiantes'
    let string_html = ''
    axios.get(url).then(response => {
        let data = response.data
        let estudiantes = data.students
        for (let index = 0; index < 50; index++) {
            const estudiante = estudiantes[index];
            let fila = `
            <tr>
                <td>${estudiante.id}</td>
                <td>${estudiante.nombres}</td>
                <td>${estudiante.apellidos}</td>
                <td>${estudiante.correo}</td>
                <td>${estudiante.edad}</td>
            </tr>
            `
            string_html += fila
        }

        tabla.innerHTML = string_html
    }).catch(error => {
        console.log(error);

    })
}

consultarReporteEstudiantes()