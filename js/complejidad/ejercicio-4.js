const yargs = require("yargs");
const argumentos = yargs.argv;

const nro = argumentos.n;

/**
 * PRUEBA n=12
 * i=0;i<6;
 * log(0)
 * i+=2 => 2
 *
 * 2<6
 * log(2)
 * i+=2  => 4
 *
 * 4<6
 * log(4)
 * i+=2 => 6
 *
 * 6<6
 *
 *  *
 * @param {*} n
 */
const ejercicio = (n) => {
  console.time("for");
  // n = 6;
  let i;
  let cont = 1;
  for (i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j, cont);
      cont++;
    }
  }
  console.timeEnd("for");
};

ejercicio(nro);
