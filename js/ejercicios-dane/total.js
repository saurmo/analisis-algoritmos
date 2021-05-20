const DATA = require("./info.json");

const ejercicio3 = () => {
  //Implementación 1
  console.time("EJERCICIO 3 - Implementación 1");
  // for
  let total1 = 0;
  for (let i = 0; i < DATA.length; i++) {
    const element = DATA[i];

    const total = parseInt(element.total.split(".").join(""));
    if (total && !Number.isNaN(total)) {
      total1 += total;
    } else {
      // console.log(element);
    }
  }
  console.timeEnd("EJERCICIO 3 - Implementación 1");

  console.time("EJERCICIO 3 - Implementación 2");
  // for of
  let total2 = 0;
  for (const element of DATA) {
    const total = parseInt(element.total.split(".").join(""));
    if (total && !Number.isNaN(total)) {
      total2 += total;
    } else {
      // console.log(element);
    }
  }
  console.timeEnd("EJERCICIO 3 - Implementación 2");

  console.time("EJERCICIO 3 - Implementación 3");
  // forEach
  let total3 = 0;
  DATA.forEach((element) => {
    const total = parseInt(element.total.split(".").join(""));
    if (total && !Number.isNaN(total)) {
      total3 += total;
    } else {
      // console.log(element);
    }
  });
  console.timeEnd("EJERCICIO 3 - Implementación 3");

  console.time("EJERCICIO 3 - Implementación 4");
  //
  let total4 = 0;
  total4 = DATA.reduce((acum, element) => {
    const total = parseInt(element.total.split(".").join(""));
    if (total && !Number.isNaN(total)) {
      return acum + total;
    } else {
      return acum;
    }
  }, 0);
  console.timeEnd("EJERCICIO 3 - Implementación 4");

  console.log(total1);
  console.log(total2);
  console.log(total3);
  console.log(total4);
};

ejercicio3();
