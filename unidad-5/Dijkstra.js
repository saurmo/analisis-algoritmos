const grafo = [
    {
        index: 0,
        parents: -1
    },
    {
        index: 1,
        parents: [
            { index: 0, value: 2, markerStart: "arrow" },
            { index: 3, value: 20, markerEnd: "arrow" },
        ],
    },
    {
        index: 2,
        parents: [
            { index: 0, value: 1, markerStart: "arrow" },
            { index: 1, value: 3, markerStart: "arrow" },
        ],
    },
    {
        index: 3,
        parents: [
            { index: 4, value: 2, markerStart: "arrow" }
        ]
    },
    {
        index: 4,
        parents: [
            { index: 1, value: 13, markerStart: "arrow" },
            { index: 2, value: 8, markerStart: "arrow" },
            { index: 0, value: 14, markerStart: "arrow" },
        ],
    },
];

const crearMatrizLongitudes = (grafo) => {
    let longitudes = [];
    let n = grafo.length;
    for (let i = 0; i < n; i++) {
        longitudes[i] = [];
        for (let j = 0; j < n; j++) {
            longitudes[i][j] = Infinity;
        }
    }


    for (let nodo of grafo) {
        if (Array.isArray(nodo.parents)) {
            for (let arista of nodo.parents) {
                if (arista.markerStart == "arrow") {
                    longitudes[arista.index][nodo.index] = arista.value;
                } else {
                    longitudes[nodo.index][arista.index] = arista.value;
                }
            }
        }
    }
    return longitudes;
};


const Dijkstra = (grafo) => {
    let longitudes = crearMatrizLongitudes(grafo);

    // Posibles opciones del camino más óptimo
    let caminos = grafo.map((nodo, index) => longitudes[0][index]);

    // Opciones que vamos a analizar (nodo)
    let candidatos = grafo.map((nodo, index) => nodo.index).filter((v) => v > 0);


    // Posibles nodos del camino más óptimo
    let punteros = grafo.map(() => 0);


    while (candidatos.length > 0) {
        let nodo_k = Infinity;
        let min_longitud = Infinity;
        for (const canditado of candidatos) {
            if (caminos[canditado] < min_longitud) {
                nodo_k = canditado;
                min_longitud = caminos[canditado];
            }
        }
        // console.log(nodo_k, min_longitud);
        candidatos = candidatos.filter((n) => n !== nodo_k);
        // console.log(candidatos);
        // console.log(longitudes);
        // console.log(caminos);
        for (const candidato of candidatos) {
            console.log(
                `candidato: ${candidato} nodo_k:${nodo_k} ${caminos[candidato]} > ${caminos[nodo_k]
                } + ${longitudes[nodo_k][candidato]}
          => ${caminos[candidato] > caminos[nodo_k] + longitudes[nodo_k][candidato]}`
            );
            if (caminos[candidato] > caminos[nodo_k] + longitudes[nodo_k][candidato]) {
                caminos[candidato] = caminos[nodo_k] + longitudes[nodo_k][candidato];
                punteros[candidato] = nodo_k;
            } else {
            }
        }
        console.log(caminos, punteros);
    }
    return { caminos, punteros };
};

(Dijkstra(grafo));

// 1. 0-2-4=9
// 2. 0-1-4=15
// 3. 0-4=14
// 4. 0-1-2-4=13

// 5. 0-2-4-3=11


