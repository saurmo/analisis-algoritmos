const factorial = require("./factorial");

/**
 * Realice un algoritmo que me indique
 * ¿cuántos números de 2 cifras se pueden formar con los dígitos 3,4,5?
 * n=3
 * k=2
 */
const ejercicio2 = () => {
  return factorial(3) / factorial(3 - 2);
};
console.log(ejercicio2());
