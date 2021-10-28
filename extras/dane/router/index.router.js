const express = require('express');
const { csvToJson } = require('../controller/index.controller');
const router = express.Router()

router.get("/", (req, res) => {
    res.send("<h1>Api DANE</h1>")
})

router.post("/datos-dane", (req, res) => {
    let dane_csv = req.files.dane
    let buffer = dane_csv.data
    csvToJson(buffer.toString()).then(response => {
        let departamentos = {}
        for (let index = 0; index < response.length; index++) {
            const municipio = response[index];
            if (Array.isArray(departamentos[municipio.departamento])) {
                departamentos[municipio.departamento].push(municipio)
            } else {
                departamentos[municipio.departamento] = []
                departamentos[municipio.departamento].push(municipio)
            }
        }
        res.send(departamentos)
    })
})


module.exports = router