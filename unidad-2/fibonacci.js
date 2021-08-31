
const fibonacci = (numero) => {
    let resultado = 0
    let fibonacci_uno = 1
    let fibonacci_dos = 0
    while (numero > 0) {
        resultado = fibonacci_uno
        fibonacci_uno = fibonacci_uno + fibonacci_dos
        fibonacci_dos = resultado
        numero--
    }
    return fibonacci_dos
}

const fibonacciRecursivo = (numero) => {
    if (numero<=2) {
        return 1
    }
    return fibonacciRecursivo(numero-1) + fibonacciRecursivo(numero-2)
}

console.time("FIBONACCI-ITERACIONES")
console.log(fibonacci(80));
console.timeEnd("FIBONACCI-ITERACIONES")


console.time("FIBONACCI-RECURSIVO")
console.log(fibonacciRecursivo(80));
console.timeEnd("FIBONACCI-RECURSIVO")
