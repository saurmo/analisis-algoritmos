
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


const capturarNumero = (numero) => {
    return numero

}

const capturarNumeroCuadradoMasDos = (numero) => {
    return (numero * numero) + 2
}



const main = () => {
    console.log(argv);

    const numero = argv.numero
    // console.time("capturarNumero")
    // capturarNumero(1)
    // console.timeEnd("capturarNumero")

    console.time("capturarNumeroCuadradoMasDos")
    capturarNumeroCuadradoMasDos(numero)
    console.timeEnd("capturarNumeroCuadradoMasDos")

}

main()