


const capturarDatos = () => {
    const yargs = require('yargs');
    const { hideBin } = require('yargs/helpers')
    const argv = yargs(hideBin(process.argv)).argv
    return argv.numero
}

// EJERICIO:
//Realizar un algoritmo que imprima los número hasta N ingresado
//por el usuario y calcular su tiempo de ejecución.
const imprimirNumeros = () => {
    let numero = capturarDatos()
    console.time("TIME")
    for (let index = 0; index <= numero; index++) {
        console.log(index);
    }
    console.timeEnd("TIME")
}

const imprimirNumeros2 = () => {
    let numero = capturarDatos()
    console.time("TIME")
    for (let index = 0; index < numero; index+=2) {
        console.log(index);
    }
    console.timeEnd("TIME")
}

const imprimirNumeros3 = () => {
    let numero = capturarDatos()
    console.time("TIME")
    for (let index = 0; index < numero; index++) {
        for (let j = 0; j < numero; j++) {
            console.log(index,j);
        }
    }
    console.timeEnd("TIME")
}
imprimirNumeros3()