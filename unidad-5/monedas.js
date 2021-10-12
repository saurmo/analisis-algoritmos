
let MONEDAS = [
    { id: "$10.000", valor: 10000, cantidad: 8 },
    { id: "$200", valor: 200, cantidad: 900 },
    { id: "$1.000", valor: 1000, cantidad: 500 },
    { id: "$100", valor: 100, cantidad: 600 },
    { id: "$500", valor: 500, cantidad: 200 },
]

const devolverMonedas = (valor) => {
    MONEDAS = MONEDAS.sort((a, b) => b.valor - a.valor)

    let nroMonedas = MONEDAS.map(() => 0)

    for (let index = 0; index < MONEDAS.length; index++) {
        let moneda = MONEDAS[index];
        let temp = Math.floor(valor / moneda.valor)
        if (temp <= moneda.cantidad) {
            // Si tengo la cantidad de monedas
            nroMonedas[index] = temp
            valor = Math.round(valor % moneda.valor, 2)
        } else {
            // No tengo las monedas suficientes de ese valor
            nroMonedas[index] = moneda.cantidad
            valor = valor - (moneda.cantidad * moneda.valor)
        }
        if (valor == 0) break
    }
    return nroMonedas
}

let valor = 55600
let respuesta = devolverMonedas(valor)
console.log(respuesta);

