const yargs = require("yargs");
const argumentos = yargs.argv;
/**
 * Juan puede viajar de Medellín a Cartagena por tres caminos diferentes y
 * de Cartagena a Santa Marta por dos caminos diferentes.
 * ¿Por cuantos caminos diferente puede Juan viajar de Medellín a Santa Marta?
 */

const obtenerRecorridos = () => {
  let nroCaminosCartagena = argumentos.caminosCartagena;
  let nroCaminosSantaMarta = argumentos.caminosSantaMarta;
  console.log("Nro de Medellín a Cartagena:", nroCaminosCartagena);
  console.log("Nro de Cartagena a Santa Marta:", nroCaminosSantaMarta);
  let contador = 0;
  for (let iCartagena = 0; iCartagena < nroCaminosCartagena; iCartagena++) {
    for (let iSantaM = 0; iSantaM < nroCaminosSantaMarta; iSantaM++) {
      console.log(
        contador,
        `Recorrido: Cartagena ${iCartagena} - Santa Marta ${iSantaM}`
      );
      contador++;
    }
  }
};

obtenerRecorridos();
