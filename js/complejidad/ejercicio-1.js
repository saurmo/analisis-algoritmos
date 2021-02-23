const yargs = require("yargs");
const argumentos = yargs.argv;

const nro = argumentos.n;

const ejercicio = (n) => {
  console.time("for");
  n = 6;
  let i;
  for (i = 0; i < n; i++) {
    console.log(i);
  }
  console.timeEnd("for");
};

ejercicio(nro);
