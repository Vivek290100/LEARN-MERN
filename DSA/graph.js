
// Operation	                Adjacency List	Adjacency Matrix
// Add Vertex	                O(1)	        O(V²) (resize matrix)
// Add Edge	                    O(1)	        O(1)
// Remove Vertex                O(V + E)        O(V²)
// Remove Edge	                O(V)	        O(1)
// Check if Edge Exists (u, v)	O(V)	        O(1)
// Get Neighbors of a Vertex	O(1)	        O(V)

// BFS -> O(V + E)
// DFS -> O(V + E)

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdges(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex}->${this.adjacencyList[vertex]}`);

        }
    }

    bfs(start) {
        const queue = [start]
        const visited = {}
        const result = []
        visited[start] = true

        while (queue.length) {
            let vertex = queue.shift()
            result.push(vertex)

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    queue.push(neighbor)
                    visited[neighbor] = true
                }
            })
        }
        return result
    }

    dfs(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList;

        (function dfshelper(vertex) {
            if (!vertex) return
            result.push(vertex)
            visited[vertex] = true

            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfshelper(neighbor)
                }
            })
        }(start))
        return result
    }

    detectCycle(start) {
        const visited = {}
        const dfs = (vertex, parent) => {
            visited[vertex] = true
            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    if (dfs(neighbor, vertex)) {
                        return true
                    }
                } else {
                    if (neighbor !== parent) {
                        return true
                    }
                }
            }
            return false
        }
        return dfs(start, null)
    }
}



const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")
graph.addVertex("E")

graph.addEdges("A", "C")
graph.addEdges("A", "F")
graph.addEdges("C", "B")
graph.addEdges("C", "D")
graph.addEdges("B", "A")
graph.addEdges("B", "F")
graph.addEdges("B", "C")
graph.addEdges("B", "D")
graph.addEdges("B", "E")
graph.addEdges("B", "G")
graph.addEdges("F", "G")
graph.addEdges("E", "G")
graph.addEdges("E", "D")

// Graph.display()
// console.log(graph.bfs("A"));
// console.log(graph.dfs("A"));
console.log(graph.detectCycle("A"));
