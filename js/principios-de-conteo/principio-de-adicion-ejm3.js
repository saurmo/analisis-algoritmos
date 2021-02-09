const yargs = require("yargs");
const argumentos = yargs.argv;

/**
 * Una biblioteca tiene 40 libros de historia y 50 de filosofía.
 * Si un estudiante quiere aprender alguno de estos temas. ¿cuántos libros puede leer?
 */

const obtenerResultados = () => {
  let nroLibrosHistoria = argumentos.historia;
  let nroLibrosFilosofia = argumentos.filosofia;
  let contador = 1;
  for (let index = 0; index < nroLibrosHistoria; index++) {
    console.log(contador, "Nro de libro de historia:", index + 1);
    contador++;
  }
  for (let index = 0; index < nroLibrosFilosofia; index++) {
    console.log(contador, "Nro de libro de filosofia:", index + 1);
    contador++;
  }
};

obtenerResultados();
