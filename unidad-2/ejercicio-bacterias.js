
/**
 * El número de bacterias en una colonia se duplica cada hora. Si la colonia
consta de 5 bacterias, ¿cuántas hay después de n>=0 horas?
 * 
 */

 const obtenerNumeroBacterias = (horas) => {
    let bacterias = 60000
    for (let index = 1; index <= horas; index++) {
        bacterias = bacterias * 2
    }
    return bacterias
 }

 const obtenerNumeroBacteriasRecursivo = (horas, bacterias) => {
     if (horas==0) {
         return bacterias
     }
     return 2*obtenerNumeroBacteriasRecursivo(horas-1, bacterias)
 }

 const obtenerNumeroBacteriasFormula = (horas) => {
     return Math.pow(2, horas) * 60000
 }
console.time("Bacterias")
//  console.log(obtenerNumeroBacterias(911));
console.log(obtenerNumeroBacteriasFormula(911));
//console.log(obtenerNumeroBacteriasRecursivo(911, 60000));
console.timeEnd("Bacterias")


 
 