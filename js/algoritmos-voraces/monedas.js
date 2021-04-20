const devolverCambio = (valor, monedas) => {
  monedas = monedas.sort((a, b) => b.valor - a.valor);
  let nroMonedas = monedas.map(() => 0);

  for (let index = 0; index < monedas.length; index++) {
    let moneda = monedas[index];
    let temp = Math.floor(valor / moneda.valor);

    if (temp <= moneda.cantidad) {
      nroMonedas[index] = temp;
      valor = Math.round(valor % moneda.valor, 2);
    } else {
      nroMonedas[index] = moneda.cantidad;
      valor = valor - moneda.cantidad * moneda.valor;
    }

    if (valor === 0) break;
  }
  return nroMonedas;
};

const imprimirDevuelta = (monedas, nroMonedas) => {
  monedas = monedas.sort((a, b) => b - a);
  for (let index = 0; index < nroMonedas.length; index++) {
    let nroMoneda = nroMonedas[index];
    if (nroMoneda > 0) {
      console.log(`Valor moneda:$${monedas[index].valor} -> ${nroMoneda}`);
    }
  }
};

let valor = 4750;
let monedas = [
  { valor: 1000, cantidad: 2 },
  { valor: 200, cantidad: 4 },
  { valor: 100, cantidad: 50 },
  { valor: 50, cantidad: 1 },
  { valor: 500, cantidad: 3 },
];
let valoresDevuelta = devolverCambio(valor, monedas);
imprimirDevuelta(monedas, valoresDevuelta);
