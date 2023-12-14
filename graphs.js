class Graph {

    constructor() {
        this.nodes = [];
        this.adjNode = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjNode[node] = [];
    }

    addEdge(node1, node2) {
        this.adjNode[node1].push(node2);
        this.adjNode[node2].push(node1);
    }
}

const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');


graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

console.log(graph.adjNode);

//output:
/**
 *  {  
 *    A: [ 'B', 'C' ],
 *    B: [ 'A', 'D' ],  
 *    C: [ 'A', 'E' ], 
 *    D: [ 'B' ], 
 *    E: [ 'C' ] 
 * }   
 *      
 */