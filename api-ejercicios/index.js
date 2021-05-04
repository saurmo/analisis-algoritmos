const { app } = require("./server");

// INICIALIZANDO EL API
const port = 3000;
app.listen(port, () => {
  console.log(`API node: http://localhost:${port}/`);
});
