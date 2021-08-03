// EJEMPLO COMENTARIO DE LINEA

// Edad de una persona
let age = 15

//EJEMPLO COMENTARIO DE BLOQUE
/**
 * Calcular la edad de una persona a partir de la fecha de nacimiento,
 * para guardar en base de datos.
 * @param {*} fecha_nacimiento Fecha de naciemiento de la persona
 * @returns Retornar un entero con la edad de la persona
 * @throws Error0103 Fecha con el formato incorrecto.
 * @author Santiago Urrego Morales
 * @version 1.0.0
 */
const calcularEdad = (fecha_nacimiento) => {

}

// VARIABLES [let,const,var]
const APP_VERSION = '1.0.0'
const ESTADOS_CIVILES = ["Soltero", "Casado", "Viudo",]
let nombre = "Santiago"
let apellido = "Urrego"
let nombre_completo = " 'Santiago' - 'Urrego' "
let nombre_completo_2 = ' "Santiago" - "Urrego" '



// SCOPE GLOBALES - LOCALES
let codigo_universidad = "UdeM"  //Esta variable esta en el scope global del archivo.

const agregarUniversidad = (nombre_universidad) => {
    let codigo_universidad = "UdeM" // Esta variable esta en el scope de la función de agregarUniversidad
}

// TIPOS DE DATOS
let carrera = "Sistemas"  // Cadena de texto
let codigo_carreta = 4003342 // Número entero
let promedio_carrera = 3.9 //  Número decimal
let carrera_activa = true // Boolean [true, false]
let secretaria_carreta = null // Valor de null
let nombre_decano; // Valor undefined

// JSON (Javascript Object Notation)
// Conformado por llaves y valores [key:value]
let estudiante = {
    nombre: "Santiago",
    fecha_nacimiento: "2020-20-02"
}
//Consultar una propiedad del JSON
let fecha_nacimiento_estudiante = estudiante.fecha_nacimiento

// Asignando una nueva propiedad al JSON
estudiante.edad = calcularEdad(fecha_nacimiento_estudiante)

/**
 * Crear objeto de una carrera
 */
const crearCarrera = () => {
    // Declarando e inicializando un Objeto
    let carrera = new Object() // Inicializand un objeto utilizando la clase
    carrera.nombre = "Sistemas"
}


// IMPRESIÓ CONSOLA
console.log('Hola Mundo desde consola')


// FUNCIONES
// Named function

/**
 * 
 * @param {*} estudiante 
 */
const imprimirEstudiante = (estudiante) => {
    console.log(estudiante)
}

/**
 * 
 * @param {*} estudiante 
 */
function imprimirEstudiante2(estudiante) {

}
//DECLARACIÓN DE FUNCIONES DENTRO DE UN JSON

const funciones = {
    NAMESPACE: 'FUNCIONES_ESTUDIANTES',
    /**
     * 
     * @param {*} estudiante 
     */
    agregarEstudiante(estudiante) { },

    /**
     * 
     * @param {*} estudiante 
     */
    imprimirEstudiante(estudiante) { }
}
// INVOCAR O LLAMAR UNA FUNCIONES DENTRO DE UN JSON
funciones.NAMESPACE
funciones.agregarEstudiante(estudiante)

//OPERADORES
// Básicos  <,>,<=,>=,!=,++,--,*,+,-,/

// == y ===
// ==  Comparando el valor de la variable
// === Comparando el valor de la varible y el tipo
let edad1 = 30
let edad2 = "30"
console.log(edad1 == edad2) // RESULTADO: true porque 30 == "30" los valores son iguales
console.log(edad1 === edad2) // RESULTADO: falso porque 30 === "30" tienen tipos de datos diferentes

console.log("Tipos de datos:");

console.log(typeof edad1) // Consulta de tipo de dato
console.log(typeof edad2)

// Convertir datos a entero
let edad2_number = parseInt(edad2)
console.log(edad2, edad2_number);

// CONCATENACION
// Clásica
let nombre_apellido = nombre + " " + apellido
// Template String
let nombre_apellido2 = `${nombre} ${apellido}`

console.log(nombre_apellido)
console.log(nombre_apellido2)

// OPERADOR TERNARIO
let es_mayor = false
// IF clasico
if (edad1 >= 18) {
    es_mayor = true
} else {
    es_mayor = false
}
// Operador ternario
es_mayor = edad1>=18 ? true : false








