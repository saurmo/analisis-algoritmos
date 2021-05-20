const DATA = require("./info.json");

const ejercicio456 = () => {
  //Implementación 1

  let capitales1 = {};
  let capitales2 = {};
  let capitales3 = {};

  console.time("EJERCICIO 1 - Implementación 1");
  // for
  for (let i = 0; i < DATA.length; i++) {
    const element = DATA[i];
    let dep = capitales1[element.departamento];
    if (dep) {
      let cod = element.codigo.substring(
        element.codigo.length - 3,
        element.codigo.length
      );
      if (cod === "001") dep.capital = element.municipio;
    } else {
      capitales1[element.departamento] = {};
      dep = capitales1[element.departamento];
      let cod = element.codigo.substring(
        element.codigo.length - 3,
        element.codigo.length
      );
      if (cod === "001") dep.capital = element.municipio;
    }
  }
  console.timeEnd("EJERCICIO 1 - Implementación 1");

  console.time("EJERCICIO 1 - Implementación 2");
  // for of
  let total2 = 0;
  for (const element of DATA) {
    let dep = capitales2[element.departamento];
    if (dep) {
      let cod = element.codigo.substring(
        element.codigo.length - 3,
        element.codigo.length
      );
      if (cod === "001") dep.capital = element.municipio;
    } else {
      capitales2[element.departamento] = {};
      dep = capitales2[element.departamento];
      let cod = element.codigo.substring(
        element.codigo.length - 3,
        element.codigo.length
      );
      if (cod === "001") dep.capital = element.municipio;
    }
  }
  console.timeEnd("EJERCICIO 1 - Implementación 2");

  console.time("EJERCICIO 1 - Implementación 3");
  // forEach
  DATA.forEach((element) => {
    let dep = capitales3[element.departamento];
    if (dep) {
      let cod = element.codigo.substring(
        element.codigo.length - 3,
        element.codigo.length
      );
      if (cod === "001") dep.capital = element.municipio;
    } else {
      capitales3[element.departamento] = {};
      dep = capitales3[element.departamento];
      let cod = element.codigo.substring(
        element.codigo.length - 3,
        element.codigo.length
      );
      if (cod === "001") dep.capital = element.municipio;
    }
  });
  console.timeEnd("EJERCICIO 1 - Implementación 3");

  console.log(capitales1);
  // console.log(capitales2);
  // console.log(capitales3);
};

ejercicio456();
