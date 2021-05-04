const { suma } = require("../js/basicos/suma");

test("Suma: 1 + 2 to equal 3", () => {
  let resultado = suma(1, 3);
  let resultadoEsperado = 4;
  expect(resultado).toBe(resultadoEsperado);
});
