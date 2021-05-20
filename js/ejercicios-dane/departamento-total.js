const DATA = require("./info.json");

const validTotal = (total) => {
  if (total && !Number.isNaN(total)) {
    return total;
  } else {
    return 0;
  }
};

const addTotals = (departamento, particulares, lea, total) => {
  departamento.particulares =
    departamento.particulares !== undefined
      ? departamento.particulares + validTotal(particulares)
      : 0;
  departamento.lea =
    departamento.lea !== undefined ? departamento.lea + validTotal(lea) : 0;
  departamento.total =
    departamento.total !== undefined ? departamento.total + validTotal(total) : 0;
};

const ejercicio456 = () => {
  //Implementación 1

  let departamentos1 = {};
  let departamentos2 = {};
  let departamentos3 = {};

  console.time("EJERCICIO 1 - Implementación 1");
  // for
  for (let i = 0; i < DATA.length; i++) {
    const element = DATA[i];
    const particulares = parseInt(element.particulares.split(".").join(""));
    const lea = parseInt(element.lea.split(".").join(""));
    const total = parseInt(element.total.split(".").join(""));
    let dep = departamentos1[element.departamento];
    if (dep) {
      addTotals(dep, particulares, lea, total);
    } else {
      departamentos1[element.departamento] = {};

      dep = departamentos1[element.departamento];
      dep["codigo"] = element.codigo.substring(0, 2);
      addTotals(dep, particulares, lea, total);
    }
  }
  console.timeEnd("EJERCICIO 1 - Implementación 1");

  console.time("EJERCICIO 1 - Implementación 2");
  // for of
  let total2 = 0;
  for (const element of DATA) {
    const particulares = parseInt(element.particulares.split(".").join(""));
    const lea = parseInt(element.lea.split(".").join(""));
    const total = parseInt(element.total.split(".").join(""));
    let dep = departamentos2[element.departamento];
    if (dep) {
      addTotals(dep, particulares, lea, total);
    } else {
      departamentos2[element.departamento] = {};
      dep = departamentos2[element.departamento];
      addTotals(dep, particulares, lea, total);
    }
  }
  console.timeEnd("EJERCICIO 1 - Implementación 2");

  console.time("EJERCICIO 1 - Implementación 3");
  // forEach
  DATA.forEach((element) => {
    const particulares = parseInt(element.particulares.split(".").join(""));
    const lea = parseInt(element.lea.split(".").join(""));
    const total = parseInt(element.total.split(".").join(""));
    let dep = departamentos3[element.departamento];
    if (dep) {
      addTotals(dep, particulares, lea, total);
    } else {
      departamentos3[element.departamento] = {};
      dep = departamentos3[element.departamento];
      addTotals(dep, particulares, lea, total);
    }
  });
  console.timeEnd("EJERCICIO 1 - Implementación 3");

  console.log(departamentos1);
  // console.log(departamentos2);
  // console.log(departamentos3);
};

ejercicio456();
