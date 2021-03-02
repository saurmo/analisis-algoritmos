/**
 * Resolver la relación de recurrencia:
 * 𝑇(𝑛)=𝑇(𝑛−1)+5   donde:T(1)=1
 */

const solucionRecursiva = (n) => {
  if (n == 1) {
    return 1;
  } else {
    return solucionRecursiva(n - 1) + 5;
  }
};

const solucionEcuacion = (n) => {
  return 5 * n - 4;
};

console.time("RECURSIVO");
let resultado = solucionRecursiva(10);
console.log(resultado);
console.timeEnd("RECURSIVO");

console.time("ecuacion");
let resultado2 = solucionEcuacion(10);
console.log(resultado2);
console.timeEnd("ecuacion");
