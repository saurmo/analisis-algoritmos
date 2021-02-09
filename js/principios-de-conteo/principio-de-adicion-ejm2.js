const yargs = require("yargs");
const argumentos = yargs.argv;

/**
 * ¿cuántos resultados diferentes se pueden obtener al lanzar un dado o una moneda?
 */

const obtenerResultados = () => {
  let nroLadosDado = 6;
  let nroLadosMoneda = 2;

  for (let index = 0; index < nroLadosDado; index++) {
    console.log("Lado del dado:", index + 1);
  }
  for (let index = 0; index < nroLadosMoneda; index++) {
    let valor = index == 0 ? "Sello" : "Cara";
    console.log("Lado moneda:", valor);
  }
};

obtenerResultados();
