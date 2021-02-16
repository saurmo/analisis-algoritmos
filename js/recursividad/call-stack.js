const main = () => {
  console.log("main");
  calcularFactorial(5);
};

const calcularFactorial = (nro) => {
  let resultado = nro;
  console.log("calcularFactorial");
  imprimirFactorial(resultado);
};

const imprimirFactorial = (nro) => {
  console.log("imprimir factorial");
};
main();
