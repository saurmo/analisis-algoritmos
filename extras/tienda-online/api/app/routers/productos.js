const { Router } = require("express");

const router = Router()
const PRODUCTOS = require('../data/productos.json');

router.get("/productos", (req, res) => {
    let respuesta = { }
    try {
    
        respuesta = { ok: true, mensaje: "Productos consultados", info: PRODUCTOS }
        return res.send(respuesta)
    } catch (error) {
        respuesta = { ok: false, mensaje: "Error al consultar los productos", info: [] }
        return res.status(500).send(respuesta)
    }
})

module.exports = router