// Libreria para probar los endpoints del api
const supertest = require('supertest');

const express = require('express');
const app = express()
app.use(express.json())
const router = require('../routers/index.router');
app.use(router)

const request = supertest(app)

test("Get /estudiantes ", async () => {
    let response = await request.get("/estudiantes")
    console.log(response.statusCode, response.body.mensaje);
    expect(response.statusCode).toEqual(200)
    expect(response.body.mensaje).toEqual("Consultar Estudiante")
})

test("Post /estudiantes ", async () => {
    let response = await request.post("/estudiantes")
    console.log(response.statusCode, response.body);
    expect(response.statusCode).toEqual(200)
})