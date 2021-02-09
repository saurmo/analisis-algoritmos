const yargs = require("yargs");
const argumentos = yargs.argv;

/**
 * Juan puede viajar de Medellín a Cartagena por vía aérea o vía terrestre.
 * Tiene a su disposición 3 aerolíneas y 6 flotas terrestres.
 * ¿De cuantas maneras distintas puede realizar el viaje? R/= 9
 */

const obtenerRecorridos = () => {
  let nroAerolineas = argumentos.aerolineas;
  let nroFlotas = argumentos.flotas;
  console.log("Nro de aerolíneas:", nroAerolineas);
  console.log("Nro de flotas terrestes:", nroFlotas);

  for (let index = 0; index < nroAerolineas; index++) {
    console.log("Aerolínea:", index + 1);
  }
  for (let index = 0; index < nroFlotas; index++) {
    console.log("Flota:", index + 1);
  }
};

obtenerRecorridos();
