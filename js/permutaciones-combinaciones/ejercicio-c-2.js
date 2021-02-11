/**
 * Considera un grupo de 10 estudiantes de los cuales 4 son mujeres y 6 son hombres.
 *  De acuerdo con esa información, determine:
Realice un algoritmo que me indique, 
el número de formas en que se puede elegir un comité de 3 miembros, 
donde al menos uno de los miembros sea mujer.
n=10
k=3

n=6
k=3
 */
const factorial = require("./factorial");

const ejercicio2 = () => {
  let todasCombinaciones = factorial(10) / (factorial(10 - 3) * factorial(3));
  let hombreCombinaciones = factorial(6) / (factorial(6 - 3) * factorial(3));
  return todasCombinaciones - hombreCombinaciones;
};

console.log(ejercicio2());
