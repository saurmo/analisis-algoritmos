
var estudiantes = [
    {
        "nombre": "Carolina",
        "apellidos": "Tobón Pino",
        "id": "1152460333",
        "correo": "ctobon333@soyudemedellin.edu.co"
    },
    {
        "nombre": "Juan Diego",
        "apellidos": "Salazar Gil",
        "id": "1017254324",
        "correo": "jsalazar324@soyudemedellin.edu.co"
    },
    {
        "nombre": "Viviana Andrea",
        "apellidos": "Muñoz Olarte",
        "id": "1000305187",
        "correo": "vmunoz187@soyudemedellin.edu.co"
    },
    {
        "nombre": "Julián",
        "apellidos": "Herrera Leal",
        "id": "1000409458",
        "correo": "jherrera458@soyudemedellin.edu.co"
    },
    {
        "nombre": "Julián",
        "apellidos": "Calderón Hincapié",
        "id": "1000662039",
        "correo": "jcalderon039@soyudemedellin.edu.co"
    },
    {
        "nombre": "Santiago",
        "apellidos": "Osorio Saldarriaga",
        "id": "1002206015",
        "correo": "sosorio015@soyudemedellin.edu.co"
    },
    {
        "nombre": "Joan Nicolás",
        "apellidos": "Cifuentes Narváez",
        "id": "1004235887",
        "correo": "jcifuentes887@soyudemedellin.edu.co"
    },
    {
        "nombre": "Jeysson Alejandro",
        "apellidos": "Betancur Rueda",
        "id": "1000895372",
        "correo": "jbetancur372@soyudemedellin.edu.co"
    },
    {
        "nombre": "Juan Jose",
        "apellidos": "Aranzales ",
        "id": "1027801014",
        "correo": "jaranzales014@soyudemedellin.edu.co"
    },
    {
        "nombre": "Emanuel",
        "apellidos": "Rico Ruiz",
        "id": "1193231633",
        "correo": "erico633@soyudemedellin.edu.co"
    },
    {
        "nombre": "Santiago Adolfo",
        "apellidos": "Yepes Zuleta",
        "id": "1193119431",
        "correo": "syepes431@soyudemedellin.edu.co"
    },
    {
        "nombre": "Santiago",
        "apellidos": "Urrego Morales",
        "id": "1036955282",
        "correo": "saurrego@udem.edu.co"
    },
    {
        "nombre": "Sebastián",
        "apellidos": "Zapata Cuervo",
        "id": "1152452072",
        "correo": "szapata072@soyudemedellin.edu.co"
    },
    {
        "nombre": "Sebastián",
        "apellidos": "Muñoz Zapata",
        "id": "1000411368",
        "correo": "smunoz368@soyudemedellin.edu.co"
    }

]


//// TAREA
//1. Hacer un algoritmo que busque un id en la base de datos de estudiante (array)
//2. Imprimir el nombre y el apellido del estudiante encontrado en el punto 1


/**
 * Buscar un estudiante en la base de datos
 * @param {*} id Identificación del estudiante
 */
function buscarEstudiante(id) {
    // Primera forma (for)
    var estudianteEncontrado = null
    for (var index = 0; index < estudiantes.length; index++) {
        var estudiante = estudiantes[index];
        if (id == estudiante.id) {
            estudianteEncontrado = estudiante
            console.log("Estudiante encontrado");
            break
        }
        console.log(index);
    }
    // Segunda forma
    for (const estudiante of estudiantes) {
        if (id == estudiante.id) {
            estudianteEncontrado = estudiante
            console.log("Estudiante encontrado");
            break
        }
    }
    // Tercera forma (Funcion flecha)
    estudiantes.forEach((estudiante) => {
        if (id == estudiante.id) {
            estudianteEncontrado = estudiante
            console.log("Estudiante encontrado");
            break
        }
    })
    // Tercera forma (Funcion nativa)
    estudiantes.forEach(function (estudiante) {
        if (id == estudiante.id) {
            estudianteEncontrado = estudiante
            console.log("Estudiante encontrado");
            break
        }
    })

    // Cuarta forma (funcion flecha)
    estudianteEncontrado = estudiantes.find((estudiante) => {
        return id == estudiante.id
    })

    // Cuarta forma (funcion nativa)
    estudianteEncontrado = estudiantes.find(function (estudiante) {
        return id == estudiante.id
    })

    // Cuarta forma (funcion corta)
    estudianteEncontrado = estudiantes.find((estudiante) => id == estudiante.id)
    // Cuarta forma (funcion corta 2)
    estudianteEncontrado = estudiantes.find(x => id == x.id)

    return estudianteEncontrado
}

/**
 * Imprimir un estudiante
 * @param {*} estudiante Objeto del estudiante
 */
function imprimirEstudiante(estudiante) {
    console.log(`El estudiante es: ${estudiante.nombre} ${estudiante.apellidos}`);
}

function main() {
    let id = 1000305187
    console.time("BUSQUEDA")
    let estudiante = buscarEstudiante(id)
    imprimirEstudiante(estudiante)
    console.timeEnd("BUSQUEDA")
}

main()


