/**
 * Ejemplo de como utilizar la librería de yargs
 *
 */

//1.Importar al archivo
//2. Capturar los argumentos ingresado con argv
const yargs = require("yargs");
const argumentos = yargs.argv;

//3. Capturar los argumentos ingresados con --NOMBRE_DEL_ARGUMENTO=VALOR
// Para capturar el valor se pone argumentos.NOMBRE_DEL_ARGUMENTO
// Ejemplo para el comando node js/input-data/index.js --numeroA=10
console.log(argumentos);
console.log(argumentos.numeroA);

function sumar(numero1, numero2) {
  return numero1 + numero2;
}
console.log("suma", sumar(argumentos.numeroA, argumentos.numeroB));
