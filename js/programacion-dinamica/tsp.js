const { NaiveTsp } = require("naive-tsp");

const v = ["A", "B", "C", "D"];

const e = {
  AB: 10,
  AC: 15,
  AD: 20,
  BA: 10,
  BC: 35,
  BD: 25,
  CA: 15,
  CB: 35,
  CD: 30,
  DA: 20,
  DB: 25,
  DC: 30,
};

const len = 100;
console.log(new NaiveTsp(v, e, "A").existsShorter(len));
