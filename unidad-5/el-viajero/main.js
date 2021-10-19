const Graph = require("./Graph");
const GraphEdge = require("./GraphEdge");
const GraphNode = require("./GraphNode");

const node1 = new GraphNode("1");
const node2 = new GraphNode("2");
const node3 = new GraphNode("3");
const node4 = new GraphNode("4");
const node5 = new GraphNode("5");
const node6 = new GraphNode("6");
const node7 = new GraphNode("7");
const node8 = new GraphNode("8");
const node9 = new GraphNode("9");
const node10 = new GraphNode("10");

const edge12 = new GraphEdge(node1, node2, 2);
const edge13 = new GraphEdge(node1, node3, 4);
const edge14 = new GraphEdge(node1, node4, 3);

const edge25 = new GraphEdge(node2, node5, 7);
const edge26 = new GraphEdge(node2, node6, 4);
const edge27 = new GraphEdge(node2, node7, 6);

const edge35 = new GraphEdge(node3, node5, 3);
const edge36 = new GraphEdge(node3, node6, 2);
const edge37 = new GraphEdge(node3, node7, 4);

const edge45 = new GraphEdge(node4, node5, 4);
const edge46 = new GraphEdge(node4, node6, 1);
const edge47 = new GraphEdge(node4, node7, 5);

const edge58 = new GraphEdge(node5, node8, 1);
const edge59 = new GraphEdge(node5, node9, 4);

const edge68 = new GraphEdge(node6, node8, 6);
const edge69 = new GraphEdge(node6, node9, 3);

const edge78 = new GraphEdge(node7, node8, 3);
const edge79 = new GraphEdge(node7, node9, 3);

const edge810 = new GraphEdge(node8, node10, 3);
const edge910 = new GraphEdge(node9, node10, 4);

const graph = new Graph();
graph.addEdge(edge12)
graph.addEdge(edge13)
graph.addEdge(edge14)
graph.addEdge(edge25)
graph.addEdge(edge26)
graph.addEdge(edge27)
graph.addEdge(edge35)
graph.addEdge(edge36)
graph.addEdge(edge37)
graph.addEdge(edge45)
graph.addEdge(edge46)
graph.addEdge(edge47)
graph.addEdge(edge58)
graph.addEdge(edge59)
graph.addEdge(edge68)
graph.addEdge(edge69)
graph.addEdge(edge78)
graph.addEdge(edge79)
graph.addEdge(edge810)
graph.addEdge(edge910)

console.log(graph.searchValues());
//console.log(graph);