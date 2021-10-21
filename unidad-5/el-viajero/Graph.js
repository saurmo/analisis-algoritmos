const GraphEdge = require("./GraphEdge");
const GraphNode = require("./GraphNode");

class Graph {
    constructor() {
        this.nodes = {};
        this.edges = {};

    }

    /**
     *
     * @param {GraphNode} newNode
     */
    addNode(newNode) { }

    /**
     *
     * @param {GraphEdge} newEdge
     */
    addEdge(newEdge) {
        let posicion = `${newEdge.startVertex.getValue()}-${newEdge.endVertex.getValue()}`
        this.edges[posicion] = newEdge.weight
    }


    toString() {
        console.log(this.edges);
    }

    // Recorrer el json o el array desde el fin hasta el inicio
    searchValues() {
        let keys = Object.keys(this.edges) // { "1-2": 2 }
        let temp = {}
        for (let index = keys.length - 1; index >= 0; index--) {
            let edge_key = keys[index];   //  "1-2"
            let array_keys = edge_key.split("-") // [1,2]

            if (Array.isArray(temp[array_keys[1]])) {
                temp[array_keys[1]].push({ value: this.edges[edge_key], node: array_keys[0] })
            } else {
                temp[array_keys[1]] = []
                temp[array_keys[1]].push({ value: this.edges[edge_key], node: array_keys[0] })
            }
        }
        let nodos_optimos = this.searchMinValue(temp)
        let camino_optimo = this.buscarCamino(nodos_optimos)
    }

    searchMinValue(nodosHijos) {
        let nodos_optimos = []
        let nodos = Object.keys(nodosHijos) // Capturar los nombres de los nodos 
        for (let index = nodos.length - 1; index >= 0; index--) {
            let nodo = nodos[index];
            let nodoHijoOptimo = nodosHijos[nodo].sort((a, b) => a.value - b.value)
            nodos_optimos.push({ nodo, optimo: nodoHijoOptimo[0] })
        }
        return nodos_optimos
    }

    buscarCamino(nodosOptimos) {
        let posicionNodo = 0
        let nodoAux=nodosOptimos[0]
        let camino=[]
        for (let index = 0; index < nodosOptimos.length; index++) {
            nodoAux = nodosOptimos[posicionNodo];
            camino.push(nodoAux.nodo)
            posicionNodo=nodosOptimos.findIndex(x=> x.nodo == nodoAux.optimo.node )   
        }
        console.log(camino);
        // let primerNodo = nodosOptimos[0]
        // let segundoNodo = nodosOptimos[primerNodo.optimo.nodo] //primerNodo.optimo.nodo=8
        // let tercerNodo = nodosOptimos[segundoNodo.optimo.nodo] //segundoNodo.optimo.nodo=5
      


      }
}




module.exports = Graph;