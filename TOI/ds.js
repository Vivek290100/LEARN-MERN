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
        
    }

      detectCycle(start){
    const visited = {}
    const dfs = (vertex, parent)=>{
      visited[vertex] = true
      for(const neighbor of this.adjacancyList[vertex]){
        if(!visited[neighbor]){
          if(dfs(neighbor, vertex)){
            return true
          }
        }else{
          if(neighbor!==parent){
            return true
          }
        }
      }
      return false
    }
    return dfs(start, null)
  }
}