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
  addNode(newNode) {}

  /**
   *
   * @param {GraphEdge} newEdge
   */
  addEdge(newEdge) {}
}

module.exports = Graph;
