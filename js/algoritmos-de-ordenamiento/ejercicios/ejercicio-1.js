/**
 * Crear un vector aleatorio de 10.000 números y ordenarlos de mayor a menor.
 *
 */

const crearVector = () => {
  let vector = [];
  let tam = 10000;
  for (let index = 0; index < tam; index++) {
    let random = Math.random() * 1000;
    vector.push(Math.round(random));
  }
  return vector;
};

const ordenarMayorMenor = (vector) => {
  for (let i = 0; i < vector.length; i++) {
    for (let j = 0; j < vector.length - 1; j++) {
      if (vector[i] > vector[j]) {
        let temp = vector[i];
        vector[i] = vector[j];
        vector[j] = temp;
      }
    }
  }
  return vector;
};

const ordenarMayorMenorJS = (vector) => {
  return vector.sort((a, b) => b - a);
};

let vector_numeros = crearVector();

console.log(vector_numeros);
console.log(ordenarMayorMenor(vector_numeros));
console.log(ordenarMayorMenorJS(vector_numeros));
