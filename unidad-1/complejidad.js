
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


const capturarNumero = (numero) => {
    return numero

}

const capturarNumeroCuadradoMasDos = (numero) => {
    return (numero * numero) + 2
}
/**
 * Complejidad O(n)
 * Realice un algoritmo que imprima todos los enteros
 *  positivos hasta `n` incluido. Donde n es 100
 * @param {*} numero 
 */
const imprimirNumeros = (numero = 100) => {
    for (let index = 0; index < numero; index++) {
        console.log(index);
    }
}
/**
 * Complejidad O(n)
 * Realice un algoritmo que sume todos los números enteros
 * hasta n. Donde n es 100.
 * @param {*} numero 
 */
const sumarNumeros = (numero = 100) => {
    let suma = 0
    for (let index = 1; index <= numero; index++) {
        suma += index
        // console.log(suma);

    }
    return suma
}



/**
 * Complejidad O(n)
 * Realice un algoritmo que sume todos los números enteros
 * hasta n. Donde n es 100. CON LA FORMULAR (n * (n + 1)) / 2;
 * @param {*} numero 
 */
const sumarNumerosConFormula = (numero = 100) => {
    return (numero * (numero + 1)) / 2
}

/**
 * Complejidas exponencial O(�!) �"
 * Realizar la tabla de multiplicar del 1-20 de n números. Donde n es 100
 * @param {*} numero 
 */
const tablaDeMultiplicar = (numero) => {

    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= numero; j++) {
            console.log(`${i}*${j}=${i * j}`);
        }
    }

}

const main = () => {
    const numero = argv.numero
    //// O(1)
    // console.time("capturarNumero")
    // capturarNumero(1)
    // console.timeEnd("capturarNumero")

    //// O(1)
    // console.time("capturarNumeroCuadradoMasDos")
    // capturarNumeroCuadradoMasDos(numero)
    // console.timeEnd("capturarNumeroCuadradoMasDos")

    //// O(n)
    // console.time("IMPRIMIR");
    // imprimirNumeros(numero)
    // console.timeEnd("IMPRIMIR");

    // //// O(n)
    // console.time("SUMAR");
    // console.log( sumarNumeros(numero));
    // console.timeEnd("SUMAR");

    //// O(n)
    // console.time("SUMAR-FORMULAR");
    // console.log( sumarNumerosConFormula(numero));
    // console.timeEnd("SUMAR-FORMULAR");

    //// O(n a la 2)
    console.time("TABLA-MULTIPLICAR");
    tablaDeMultiplicar(numero)
    console.timeEnd("TABLA-MULTIPLICAR");


}

main()