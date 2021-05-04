const DATA = require("./info.json");

const ejercicio1 = () => {
  //Implementación 1
  console.time("EJERCICIO 1 - Implementación 1");
  let total = 0;
  for (let i = 0; i < DATA.length; i++) {
    const element = DATA[i];
    const particulares = parseInt(element.particulares);
    if (particulares && !Number.isNaN(particulares)) {
      total += particulares;
    } else {
      console.log(element);
    }
  }
  console.timeEnd("EJERCICIO 1 - Implementación 1");

  console.time("EJERCICIO 1 - Implementación 2");
  let total2 = 0;
  for (const element of DATA) {
    const particulares = parseInt(element.particulares);
    if (particulares && !Number.isNaN(particulares)) {
      total2 += particulares;
    } else {
      console.log(element);
    }
  }
  console.timeEnd("EJERCICIO 1 - Implementación 2");

  console.time("EJERCICIO 1 - Implementación 3");
  let total3 = 0;
  DATA.forEach((element) => {
    const particulares = parseInt(element.particulares);
    if (particulares && !Number.isNaN(particulares)) {
      total3 += particulares;
    } else {
      console.log(element);
    }
  });
  console.timeEnd("EJERCICIO 1 - Implementación 3");

  console.time("EJERCICIO 1 - Implementación 4");
  let total4 = 0;
  total4 = DATA.reduce((acum, element) => {
    const particulares = parseInt(element.particulares);
    if (particulares && !Number.isNaN(particulares)) {
      return acum + particulares;
    } else {
      console.log(element);
      return acum;
    }
  });
  console.timeEnd("EJERCICIO 1 - Implementación 4");

  console.log(total);
  console.log(total2);
  console.log(total3);
};

ejercicio1();
