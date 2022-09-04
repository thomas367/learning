/**
 * Graphs, sometimes known as networks, refer to sets of vertices(nodes) with linkages (or edges). 
 * We can further divide graphs into many groups (i.e. directed graphs and undirected graphs, 
 * weighted graphs and unweighted graphs, etc.), according to whether the linkages have direction. 
 * We use graphs in our daily lives without even realizing it. Graphs help calculate the 
 * best route in navigation apps or recommend friends with whom we might like to connect.
 * 
 * Below is an implementation of an Undirected - Weighted graph.
 * 
 * addVertex, removeVertex, removeEdge is same as the Undirected Unweighted Graph.
 */

class UndirectedWeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    /**
     * The addVertex method takes a vertex value as parameter and adds it as a key to the 
     * adjacencyList if it wasn't previously present.
     */    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    /**
     * The addEdge method takes two vertices as parameters and the weight, and it adds each 
     * vertex to the other's array of connections addEdge(vertexOne, vertexTwo, weight).
     */
    addEdge(vertexOne, vertexTwo, weight) {
        if (!this.adjacencyList[vertexOne] || !this.adjacencyList[vertexTwo]) {
            return false;
        }

        if (!this.adjacencyList[vertexOne].includes(vertexTwo)) {
            this.adjacencyList[vertexOne].push({vertex: vertexTwo, weight: weight});
        }

        if (!this.adjacencyList[vertexTwo].includes(vertexOne)) {
            this.adjacencyList[vertexTwo].push({vertex: vertexOne, weight: weight});
        }

        return true;
    }

    /**
     * The removeVertex method takes a vertex value as parameter. It removes all connections 
     * to that vertex present in the graph and then deletes the node key from the adj list.
     */
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return false;
        }

        while(this.adjacencyList[vertex].length) {
            let adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    /**
     * The removeEdge method takes two vertices as parameters, and it removes each 
     * vertex from the other's array of connections.
     */
    removeEdge(vertexOne, vertexTwo) {
        if (!this.adjacencyList[vertexOne] || !this.adjacencyList[vertexTwo]) {
            return false;
        }

        if (this.adjacencyList[vertexOne].includes(vertexTwo)) {
            for (let i = 0; i < this.adjacencyList[vertexOne].length; i++) {
                if (this.adjacencyList[vertexOne][i].value === vertexTwo) {
                    this.adjacencyList[vertexOne].splice(i, 1);
                }
            }
        }

        if (this.adjacencyList[vertexTwo].includes(vertexOne)) {
            for (let i = 0; i < this.adjacencyList[vertexTwo].length; i++) {
                if (this.adjacencyList[vertexTwo][i].value === vertexOne) {
                    this.adjacencyList[vertexTwo].splice(i, 1);
                }
            }
        }

        return true;
    }
}
