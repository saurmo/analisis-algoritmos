
function llenarMochila(pesoMaximo = 0, pesos = [], valores = []) {
    let values = [];
    let numIter=0
    //TABLA DE RESULTADOS INTERMEDIOS: Valores máximos
    numIter++;
    values = pesos.map(v => Array.from({ length: pesoMaximo + 1 }, () => 0));
    for (let i = 1; i < pesos.length; i++) {
        numIter++;
        for (let j = 1; j <= pesoMaximo; j++) {
            numIter++;
            if (i === 1) {
                if (j >= pesos[i]) values[i][j] = valores[i];
            } else if (j < pesos[i]) {
                values[i][j] = values[i - 1][j];
            } else {
                values[i][j] = Math.max(values[i - 1][j], valores[i] + values[i - 1][j - pesos[i]]);
            }
        }
    }
    //BUCLE VORAZ
    let objetos = [];
    let j = pesoMaximo;
    for (let i = pesos.length - 1; i > 0; i--) {
        numIter++;
        if (values[i][j] !== values[i - 1][j] && values[i][j] === values[i - 1][j - pesos[i]] + valores[i]) {
            objetos.push(i);
            j -= pesos[i];
        }
    }
    return objetos;
}

const pesos=[12,2,1,4,1]
const valores=[4,2,1,10,2]

let resultado = llenarMochila(15,pesos, valores)
console.log(resultado);