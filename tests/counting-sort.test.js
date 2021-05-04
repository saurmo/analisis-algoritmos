const countingSort = require("../js/algoritmos-de-ordenamiento/counting-sort");

test("Order by values ", () => {
  let items = [5, 8, 3, 3];
  let resultado = countingSort(items, 3, 8);
  let resultadoEsperado = [3, 3, 5, 8];
  expect(resultado.toString()).toBe(resultadoEsperado.toString());
});
