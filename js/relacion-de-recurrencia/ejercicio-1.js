/**
 * Resolver la relación de recurrencia:
 * 𝑇(𝑛)=𝑇(𝑛−1)+3    donde:T(0)=2
 */

const solucionRecursiva = (n) => {
  if (n == 0) {
    return 2;
  } else {
    return solucionRecursiva(n - 1) + 3;
  }
};

const solucionEcuacion = (n) => {
  return 2 + 3 * n;
};

console.time("RECURSIVO");
let resultado = solucionRecursiva(100000);
console.log(resultado);
console.timeEnd("RECURSIVO");

console.time("ecuacion");
let resultado2 = solucionEcuacion(100000);
console.log(resultado2);
console.timeEnd("ecuacion");
