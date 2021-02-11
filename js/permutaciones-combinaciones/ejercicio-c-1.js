/**
 * Considera un grupo de 10 estudiantes de los cuales 4 son mujeres y 6 son hombres.
 *  De acuerdo con esa información, determine:
Realice un algoritmo que me indique, 
el número de formas en que se puede elegir un representante del grupo .
n=10
k=1
 */
const factorial = require("./factorial");

const ejercicio1 = () => {
  return factorial(10) / (factorial(10 - 1) * factorial(1));
};

console.log(ejercicio1());
