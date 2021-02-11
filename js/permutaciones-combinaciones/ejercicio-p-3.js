/**
 * Realice un algoritmo que me indique
 *  ¿cuáles son los números de 2 cifras que se pueden formar con los dígitos 3,4,5?
 */

3 - 4;
3 - 5;
4 - 5;
5 - 6;

const ejercicio3 = () => {
  let nro_inicial = 3;
  let elementos = [];
  for (let i = nro_inicial; i <= nro_inicial + 2; i++) {
    for (let j = nro_inicial; j <= nro_inicial + 2; j++) {
      // ¿Como elimino las opciones de 33,44,55?
      if (i !== j) {
        elementos.push(i * 10 + j);
      }
    }
  }
  return elementos;
};
console.log(ejercicio3());
