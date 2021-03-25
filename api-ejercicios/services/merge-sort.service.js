/**
 * Algoritmo de ordenamiento de MERGE-SORT
 */

/**
 * Ordenar los vectores y unirlos en una sola lista
 * @param {*} arrayIzq
 * @param {*} arrayDer
 */
const merge = (arrayIzq, arrayDer) => {
  let arrayOrdenado = [];

  while (arrayIzq.length && arrayDer.length) {
    if (arrayIzq[0].edad < arrayDer[0].edad) {
      arrayOrdenado.push(arrayIzq.shift());
    } else {
      arrayOrdenado.push(arrayDer.shift());
    }
  }

  return [...arrayOrdenado, ...arrayIzq, ...arrayDer];
};

/**
 * Merge sort
 * @param {*} array Input
 */
const mergeSort = (array) => {
  //Comprobar la longitud del array
  if (array.length <= 1) return array;

  let mitad = Math.floor(array.length / 2);
  // Dividir lista en sublistas
  let arrayIzq = mergeSort(array.slice(0, mitad));
  let arrayDer = mergeSort(array.slice(mitad));

  // Ordenar y unir
  let arrayOrdenado = merge(arrayIzq, arrayDer);
  return arrayOrdenado;
};
module.exports = mergeSort;
