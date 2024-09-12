class graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdges(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex}->${this.adjacencyList[vertex]}`);
            
        }
    }
}


const Graph = new graph()

Graph.addVertex("A")
Graph.addVertex("B")
Graph.addVertex("C")


Graph.addEdges("A", "B")
Graph.addEdges("B", "C")
Graph.addEdges("C", "A")

Graph.display()