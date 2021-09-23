
const { sumar } = require('../calculadora');

test('suma (4 + 5) debe ser igual a 9', () => {
    let resultado_obtenido = sumar(4, 5)
    let resultado_esperado = 9
    expect(resultado_obtenido).toBe(resultado_esperado);
});