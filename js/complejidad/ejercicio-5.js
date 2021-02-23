const yargs = require("yargs");
const argumentos = yargs.argv;

const nro = argumentos.n;

/**
 * @param {*} n
 */
const ejercicio = (n) => {
  console.time("while");
  // n = 6;
  let i = 1;
  while (i < n) {
    console.log(i);
    i = i * 2;
  }
  console.timeEnd("while");
};

ejercicio(nro);
