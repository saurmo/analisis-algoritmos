
class GraphEdge {
    constructor(startVertex, endVertex, weight = 0) {
      this.startVertex = startVertex;
      this.endVertex = endVertex;
      this.weight = weight;
    }
  }
  
  module.exports = GraphEdge;