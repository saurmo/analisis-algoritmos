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
        console.log(temp);

    }

    searchMinValue(){

    }


}

module.exports = Graph;