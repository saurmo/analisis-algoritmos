/**
 * Se tienen 3 bolas azules, 2 bolas verdes.
 *  Realice un algoritmo que me indique,
 * ¿De cuantas maneras se pueden ordenar en fila?
 * n=5
 * k=[a:3, b:2]
 */

const factorial = require("./factorial");

const ejercicio5 = () => {
  return factorial(5) / (factorial(3) * factorial(2));
};

console.log(ejercicio5());
