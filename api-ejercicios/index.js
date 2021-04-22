/**
 * Archivo principal del API
 */
const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
app.use(express.json());
app.use(fileUpload());
//  INVOCAR LAS RUTAS DE LA CARPETA ROUTERS
const routers = require("./routers/index");
app.use(routers);

// INICIALIZANDO EL API
const port = 3000;
app.listen(port, () => {
  console.log(`API node: http://localhost:${port}/`);
});
