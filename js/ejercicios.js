/**
 * 1. Realice un algoritmo que sume el número 5 y el número 8.
 * Función de sumar dos números
 * @param {*} numero1 Número 1
 * @param {*} numero2 Número 2
 */
function sumar(numero1, numero2) {
  return numero1 + numero2;
}
//console.log(sumar(25, 8));

/**
 * 2. Realizar un algoritmo que reciba como parámetro un número y lo retorne
 * Función de retornar un número
 * @param {*} numero Número
 */
function devolverNumero(numero) {
  return numero;
}
// console.time("devolverNumero");
// console.log(devolverNumero(1000000));
// console.timeEnd("devolverNumero");

/**
 * Función del cuadrado de un número + 2
 * @param {*} numero Número
 */
function cuadrado(numero) {
  // return (numero ** 2) + 2;
  return numero * numero + 2;
}

// console.time("cuadrado");
// console.log(cuadrado(6));
// console.timeEnd("cuadrado");

/**
 * Función para imprimir números
 * @param {*} numero Número limite
 */
function imprimirNumeros(numero) {
  for (let index = 0; index <= numero; index++) {
    console.log(index);
  }
}
// console.time("imprimirNumeros");
// console.log(imprimirNumeros(100)); //10.28
// console.log(imprimirNumeros(1000)); //53.7
// console.log(imprimirNumeros(10000)); //364.2
// console.timeEnd("imprimirNumeros");

/**
 * 4. Realice un algoritmo que sume todos los números enteros hasta n.
 * Función para sumar números
 * @param {*} numero Número limite
 */
function sumarNumeros(numero) {
  let suma = 0;
  for (let index = 0; index <= numero; index++) {
    suma = suma + index;
  }
  return suma;
}
// console.time("sumarNumeros");
// console.log(sumarNumeros(10));
// console.log(sumarNumeros(100));
// console.log(sumarNumeros(1000));
// console.log(sumarNumeros(10000));
// console.log(sumarNumeros(100000));
// console.log(sumarNumeros(1000000));
// console.log(sumarNumeros(10000000));
// console.log(sumarNumeros(100000000));
// console.log(sumarNumeros(1000000000));
// console.timeEnd("sumarNumeros");

/**
 * 4. Realice un algoritmo que sume todos los números enteros hasta n.
 * Función para sumar números
 * NOTA: Con función optimizada
 * @param {*} numero Número limite
 */
function sumarNumerosOptimizado(numero) {
  return (numero * (numero + 1)) / 2;
}

// console.time("sumarNumerosOptimizado");
// console.log(sumarNumerosOptimizado(10));
// console.log(sumarNumerosOptimizado(100));
// console.log(sumarNumerosOptimizado(1000));
// console.log(sumarNumerosOptimizado(10000));
// console.log(sumarNumerosOptimizado(100000));
// console.log(sumarNumerosOptimizado(1000000));
// console.log(sumarNumerosOptimizado(10000000));
// console.log(sumarNumerosOptimizado(100000000));
// console.log(sumarNumerosOptimizado(1000000000));
// console.timeEnd("sumarNumerosOptimizado");

/**
 * 5. Realizar la tabla de multiplicar del 1-20 de n números. Donde n es 100
 * @param {*} limite
 */
function tablaDeMultiplicar(limite) {
  let nroItems = 20;
  for (let i = 1; i <= limite; i++) {
    console.log("Tabla del " + i);
    for (let j = 1; j <= nroItems; j++) {
      // console.log(`${i}x${j}=${i * j}`);
    }
    console.log();
  }
}
console.time("tablaDeMultiplicar");
// console.log(tablaDeMultiplicar(10));
// console.log(tablaDeMultiplicar(100));
// console.log(tablaDeMultiplicar(1000));
// console.log(tablaDeMultiplicar(10000));
// console.log(tablaDeMultiplicar(100000));
// console.log(tablaDeMultiplicar(1000000));
console.log(tablaDeMultiplicar(10000000));
// console.log(tablaDeMultiplicar(100000000));
// console.log(tablaDeMultiplicar(1000000000));
console.timeEnd("tablaDeMultiplicar");
