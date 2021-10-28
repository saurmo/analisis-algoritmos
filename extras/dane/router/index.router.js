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
        res.send(response)
    })
})


module.exports = router