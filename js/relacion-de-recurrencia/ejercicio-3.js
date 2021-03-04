/**
Una persona invierte $10.000 pesos al 12% de interés anual. ¿cuánto dinero tiene al cabo de n años?
T(n)=1.12^n  * T(n-1)  donde T(0)=Monto de inversión inicial
 */

const solucionRecursiva = (n, monto_inicial) => {
  if (n == 0) {
    return monto_inicial;
  } else {
    return 1.12 * solucionRecursiva(n - 1, monto_inicial);
  }
};

const solucionEcuacion = (n, monto_inicial) => {
  return monto_inicial * Math.pow(1.12, n);
};

let anios = 15;

console.time("RECURSIVO");
let resultado = solucionRecursiva(anios, 10000);
console.timeEnd("RECURSIVO");
console.time("ECUACION");
let resultado2 = solucionEcuacion(anios, 10000);
console.timeEnd("ECUACION");

console.log(`Periodo: ${anios}: Monto: ${resultado}  Monto 2: ${resultado2}`);

// console.time("ecuacion");
// let resultado2 = solucionEcuacion(10);
// console.log(resultado2);
// console.timeEnd("ecuacion");
