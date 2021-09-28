const express = require('express');
const app = express()

const router = require('./routers/index.router');
app.use(router)


const PORT = 3000
app.listen(PORT, () => {
    console.log("Api en ejecución: http://localhost:" + PORT);
})