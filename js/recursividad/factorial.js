//1.Importar al archivo
//2. Capturar los argumentos ingresado con argv
const yargs = require("yargs");
const argumentos = yargs.argv;

const nroFactorial = argumentos.f;

/**
 * Calculo del factorial de un número
 * NOTA: Implementación con sentencia iterativa
 * @param {*} nro
 */
const factorial = (nro) => {
  let resultado = 1;
  for (let i = 1; i <= nro; i++) {
    resultado *= i;
  }
  return resultado;
};

console.time("Factorial-Iterativo");
console.log(factorial(nroFactorial));
console.timeEnd("Factorial-Iterativo");
