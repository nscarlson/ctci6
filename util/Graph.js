/**
 * Graph 
 * 
 * @param {Object} adjacencyMatrix
 */
const Graph = function (adjacencyMatrix) {
    this.graph = {}

    for (let key in adjacencyMatrix) {
        this.addNode(key)
        this.addAdjacent(key, adjacencyMatrix[key])
    }
}

Graph.prototype.addNode = function(name) {
    if (!this.hasVertex(name)) {
        this.graph[name] = {}
    }
}

Graph.prototype.addAdjacent = function(vertex, neighbors) {
    for (let i = 0, len = neighbors.length i < len i++) {
        const neighbor = neighbors[i]
        this.addVertex(neighbor)
        this.addEdge(vertex, neighbor)
    }
}
  