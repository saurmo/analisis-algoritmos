const DATA = require("./info.json");

const ejercicio2 = () => {
  //Implementación 1
  console.time("EJERCICIO 2 - Implementación 1");
  // for
  let total = 0;
  for (let i = 0; i < DATA.length; i++) {
    const element = DATA[i];
    const lea = parseInt(element.lea.split(".").join(""));
    if (lea && !Number.isNaN(lea)) {
      total += lea;
    } else {
      // console.log(element);
    }
  }
  console.timeEnd("EJERCICIO 2 - Implementación 1");

  console.time("EJERCICIO 2 - Implementación 2");
  // for of
  let total2 = 0;
  for (const element of DATA) {
    const lea = parseInt(element.lea.split(".").join(""));
    if (lea && !Number.isNaN(lea)) {
      total2 += lea;
    } else {
      // console.log(element);
    }
  }
  console.timeEnd("EJERCICIO 2 - Implementación 2");

  console.time("EJERCICIO 2 - Implementación 3");
  // forEach
  let total3 = 0;
  DATA.forEach((element) => {
    const lea = parseInt(element.lea.split(".").join(""));
    if (lea && !Number.isNaN(lea)) {
      total3 += lea;
    } else {
      // console.log(element);
    }
  });
  console.timeEnd("EJERCICIO 2 - Implementación 3");

  console.time("EJERCICIO 2 - Implementación 4");
  //
  let total4 = 0;
  total4 = DATA.reduce((acum, element) => {
    const lea = parseInt(element.lea.split(".").join(""));
    if (lea && !Number.isNaN(lea)) {
      return acum + lea;
    } else {
      return acum;
    }
  }, 0);
  console.timeEnd("EJERCICIO 2 - Implementación 4");

  console.log(total);
  console.log(total2);
  console.log(total3);
  console.log(total4);
};

ejercicio2();
