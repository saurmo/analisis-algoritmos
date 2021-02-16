//1.Importar al archivo
//2. Capturar los argumentos ingresado con argv
const yargs = require("yargs");
const argumentos = yargs.argv;

const nroFibonacci = argumentos.f;

/**
 * Calculo del fibonacci de un número
 * NOTA: Implementación con sentencia iterativa
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 * F(n) = F (n-1) + F (n-2)
 * @param {*} nro
 */
const fibonacci = (nro) => {
  let nro1 = 1;
  let nro2 = 0;
  let temp = 0;
  while (nro > 0) {
    temp = nro1;
    nro1 = nro1 + nro2;
    nro2 = temp;
    nro--;
  }
  return nro2;
};

console.time("Fibonacci-Iterativo");
console.log(fibonacci(nroFibonacci));
console.timeEnd("Fibonacci-Iterativo");
