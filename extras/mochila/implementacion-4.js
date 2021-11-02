function llenarMochila2(pesoMaximo = 0, pesos = [], valores = []) {
    let n = pesos.length;
    let numIter = 0
    numIter += 1 + 3 * n + n * Math.log2(n);
    let fracciones = valores.map(v => 0);
    let precios = valores.map((v, i) => [i, v / pesos[i]])
    precios = precios.sort((a, b) => b[1] - a[1])
    precios = precios.map(v => v[0]);
    console.log(fracciones);
    console.log(precios);

    let pesoMochila = 0;
    for (let j = 0; j < precios.length; j++) {
        numIter++;
        let i = precios[j];
        if (pesoMochila + pesos[i] <= pesoMaximo) {
            fracciones[i] = 1;
            pesoMochila += pesos[i];
        } else {
            fracciones[i] = (pesoMaximo - pesoMochila) / pesos[i];
            pesoMochila = pesoMaximo;
        }
 

        if (pesoMochila === pesoMaximo) break;
    }
    return fracciones;
}

const pesos = [12, 2, 1, 4, 1]
const valores = [4, 2, 1, 10, 2]

let resultado = llenarMochila2(15, pesos, valores)
console.log('-----');
console.log(pesos);
console.log(valores);
console.log(resultado);