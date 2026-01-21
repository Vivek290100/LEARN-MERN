class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    bfs(start){
        const queue = [start]
        const result = []
        const visited = {}
        visited[start] = true
        while(queue.length){
          let vertex = queue.shift()
          result.push(vertex)

          this.adjacencyList[vertex].forEach(neighbor=>{
            if(!visited[neighbor]){
              result.push(neighbor)
              visited[vertex] = true
            }
          })
        }
        return result
    }

    dfs(start){
      const result = []
      const visited = {}
      const adjacencyList = this.adjacencyList;

      (function dfsHelper(vertex){
        if(!vertex){
          return
        }
        result.push(vertex)
        visited[vertex] = true

        adjacencyList[vertex].forEach(neighbor=>{
          if(!visited[neighbor]){
            dfsHelper(neighbor)
          }
        })
      }(start))
      return result
    }

    detectCycle(start){
      const visited = {}
      const dfs = (vertex, parent) =>{
        visited[vertex] = true
        for (const neighbor of this.adjacencyList[vertex]){
          if(!visited[neighbor]){
            if(dfs(neighbor,vertex)){
              return true
            }
          }else{
            if(neighbor!=parent){
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
graph.addVertex("D")
graph.addVertex("C")


graph.addEdges("A","B")
graph.addEdges("D","B")
graph.addEdges("A","C")
graph.addEdges("D","B")
graph.addEdges("A","C")

console.log(graph.bfs("A"));
console.log(graph.dfs("A"));
