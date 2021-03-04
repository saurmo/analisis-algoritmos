const calcularInteresesR = (n, monto_inicial) => {
  if (n == 0) {
    return monto_inicial;
  } else {
    return 1.12 * calcularInteresesR(n - 1, monto_inicial);
  }
};

const calcularInteresesE = (n, monto_inicial) => {
  return monto_inicial * Math.pow(1.12, n);
};

module.exports = {
  calcularInteresesE,
  calcularInteresesR,
};
