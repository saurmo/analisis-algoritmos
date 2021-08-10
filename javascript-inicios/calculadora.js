


/**
 * Método para sumar dos números
 * @param {Number} numero1 Primer número para sumar
 * @param {Number} numero2 Segundo número para sumar
 * @returns Suma de dos numeros
 */
const sumar = (numero1, numero2) => {
    return parseFloat(numero1) + parseFloat(numero2)
}

/**
 * Método para multiplicar dos numeros
 * @param {Number} numero1 Primer número para multiplicar
 * @param {Number} numero2 Segundo número para multiplicar
 * @returns Multiplicación de dos numeros
 */
const multiplicar = (numero1, numero2) => {
    return parseFloat(numero1) * parseFloat(numero2)
}

/**
 * Método para restar dos números
 * @param {Number} numero1 Primer número para restar
 * @param {Number} numero2 Segundo número para restar
 * @returns Restar de dos numeros
 */
const restar = (numero1, numero2) => {
    return parseFloat(numero1) - parseFloat(numero2)
}

/**
 * Método para dividir dos números
 * @param {Number} numero1 Primer número para dividir
 * @param {Number} numero2 Segundo número para dividir
 * @throws Error si numero2 es igual a 0
 * @returns Dividir de dos numeros
 */
const dividir = (numero1, numero2) => {
    if (numero2 == 0) {
        throw new Error("No se puede realizar la división por cero")
    }
    return parseFloat(numero1) / parseFloat(numero2)
}

/**
 * Método principal para la calculadora. 
 * Capturar la información de los argv de nodejs por consola
 * numero1, numero2, operacion[+,-,/,*]
 */
const main = () => {
    let numero1 = 5
    let numero2 = 10
    let operacion = '-'
    switch (operacion) {
        case '-':
            restar(numero1, numero2)
            break;
        case '+':
            sumar(numero1, numero2)
            break;
        case '*':
            multiplicar(numero1, numero2)
            break;
        case '/':
            dividir(numero1, numero2)
            break;
        default:
        console.log(`La operacion (${operacion}) no es soportada.`);
            break;
    }
}

