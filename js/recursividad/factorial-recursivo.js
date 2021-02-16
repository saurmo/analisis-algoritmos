//1.Importar al archivo
//2. Capturar los argumentos ingresado con argv
const yargs = require("yargs");
const argumentos = yargs.argv;

const nroFactorial = argumentos.f;

/**
 * Calculo del factorial de un número
 * NOTA: Implementación con sentencia recursiva
 * @param {*} nro
 */
const factorial = (nro) => {
  if (nro == 0) {
    return 1;
  }
  return nro * factorial(nro - 1);
};

console.time("Factorial-Recursivo");
console.log(factorial(3));
console.timeEnd("Factorial-Recursivo");
