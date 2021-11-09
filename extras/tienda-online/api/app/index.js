const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors())

const  version_api="/api/v1"

const productos_router = require('./routers/productos')
app.use(version_api,productos_router )
 
const PORT = process.env.PORT ||  3000
app.listen(PORT, ()=>{
    console.log(` API en ejecucion: http://localhost:${PORT}`);
})