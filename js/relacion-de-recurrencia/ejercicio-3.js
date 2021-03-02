/**
Una persona invierte $10.000 pesos al 12% de interés anual. ¿cuánto dinero tiene al cabo de n años?
T(n)=1.12^n  * T(n-1)  donde T(0)=Monto de inversión inicial
 */

const solucionRecursiva = (n, monto_inicial) => {
  if (n == 0) {
    return monto_inicial;
  } else {
    return Math.pow(1.12, n) * solucionRecursiva(n - 1, monto_inicial);
  }
};

const solucionEcuacion = (n) => {
  return 5 * n - 4;
};

console.time("RECURSIVO");
let resultado = solucionRecursiva(3, 10000);
console.log(resultado);
console.timeEnd("RECURSIVO");

// console.time("ecuacion");
// let resultado2 = solucionEcuacion(10);
// console.log(resultado2);
// console.timeEnd("ecuacion");
