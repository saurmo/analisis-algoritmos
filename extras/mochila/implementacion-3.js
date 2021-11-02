
/*
        a:{
            peso: peso, // peso actual del artículo
             valor: valor // Valor actual del artículo
        }
    */
function knapsack(a, limitW) {
    var totV = 0,
        maxV = 0;
    var option = [],
        cop = [];
    var N = a.length;
    for (var i = 0;
        i < a.length;
        i++) {
        totV += a[i].value
    }



    function find(i, tw, tv) {
        var k;
        if (tw + a[i].weight <= limitW) // Considere la situación en la que el artículo i se coloca en la mochila
        {
            cop[i] = a[i].index;
            if (i < N - 1) {
                find(i + 1, tw + a[i].weight, tv);
            }
            else {
                // Se forma el mejor resultado
                for (k = 0; k < N; k++) {
                    option[k] = cop[k];
                }
                maxV = tv;
            }
        }
        if (tv - a[i].value > maxV) // Considerando que el elemento i no está en la mochila, este estado puede cortar algunos nodos
        {
            cop[i] = 0;
            if (i < N - 1) {
                find(i + 1, tw, tv - a[i].value);
            }
            else {
                // Se forma el mejor resultado
                for (k = 0; k < N; k++) {
                    option[k] = cop[k];
                }
                maxV = tv - a[i].value;
            }
        }
    }

    find(0, 0, totV);

    return {
        maxValue: maxV,
        option: option
    };

}
let valores=
[
    { value: 4, index:0,weight: 12 },
    { value: 2, index:1,weight: 2},
    { value: 1, index:2,weight: 1},
    { value: 10, index:3,weight: 4 },
    { value: 2, index:4,weight: 1 }

]
let resultado = knapsack(valores, 15)
console.log(resultado);