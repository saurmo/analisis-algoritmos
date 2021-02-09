const yargs = require("yargs");
const argumentos = yargs.argv;

/**
 * ¿cuántos resultados diferentes se pueden obtener al lanzar un dado o una moneda?
 */

const obtenerResultados = () => {
  let nroLadosDado = 6;
  let nroLadosMoneda = 2;
  let contador = 1;
  for (let iDado = 1; iDado <= nroLadosDado; iDado++) {
    for (let iMoneda = 1; iMoneda <= nroLadosMoneda; iMoneda++) {
      let valor = iMoneda == 1 ? "Sello" : "Cara";
      console.log(contador, `Resultado: Dado ${iDado}-Moneda ${valor}`);
      contador++;
    }
  }
};

obtenerResultados();
