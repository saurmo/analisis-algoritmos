const request = require("supertest");
const { app } = require("../../api-ejercicios/server");

test("Test: Api home Status", (done) => {
  request(app)
    .get("/")
    .then((response) => {
      let respuestaTexto = response.text;
      let respuestaApiStatusCode = response.statusCode;
      expect(respuestaApiStatusCode).toBe(200);
      done();
    });
});

test("Test: Api home Texto", (done) => {
  request(app)
    .get("/")
    .then((response) => {
      let respuestaTexto = response.text;
      expect(respuestaTexto).toBe("Hola API");
      done();
    });
});
