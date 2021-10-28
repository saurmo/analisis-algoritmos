const express = require('express');
const fileupload = require('express-fileupload');

const app = express()
app.use(fileupload())


const router = require('./router/index.router');
app.use(router)

const PORT=3001
app.listen(PORT, ()=>{
    console.log(`Api: http://localhost:${PORT}`);
})
