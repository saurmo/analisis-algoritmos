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
  for (i = 0; i < n / 2; i += 2) {
    console.log(i);
  }
  console.timeEnd("for");
};

ejercicio(nro);
