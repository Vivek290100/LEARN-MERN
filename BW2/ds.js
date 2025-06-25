// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(root, node){
//         if(node.value<root.value){
//             if(root.left == null){
//                 root.left = node
//             }else{
//                 return this.insertNode(root.left, node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right = node
//             }else{
//                 return this.insertNode(root.right, node)
//             }
//         }
//     }

//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value)
//             this.inorder(root.right)
//         }
//     }

//     search(root, value){
//         if(!root){
//             return false
//         }else{
//             if(root.value == value){
//                 return true
//             }else if(root.value > value){
//                 return this.search(root.left, value)
//             }else{
//                 return this.search(root.right, value)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     levelOrder(){
//         let arr = []
//         arr.push(this.root)
//         while(arr.length){
//             let current = arr.shift()
//             console.log(current.value);
//             if(current.left){
//                 arr.push(current.left)
//             }
//             if(current.right){
//                 arr.push(current.right)
//             }
//         }
//     }

//     height(root){
//         if(!root){
//             return 0
//         }
//         const left = this.height(root.left)
//         const right = this.height(root.right)
//         return Math.max(left, right)+1
//     }

//     secondLarge(){
//         let arr = []
//         this.helper(this.root, arr)
//         return arr[1]
//     }

//     helper(root, arr){
//         if(!root){
//             return 
//         }
//         this.helper(root.right, arr)
//         arr.push(root.value)
//         this.helper(root.left, arr)
//     }

//     delete(value){
//         this.root =  this.deleteNode(this.root, value)
//     }

//     deleteNode(root, value){
//         if(!root){
//             return
//         }
//         if(value<root.value){
//             root.left = this.deleteNode(root.left, value)
//         }else if(value> root.value){
//             root.right = this.deleteNode(root.right, value)
//         }else{
//             if(root.left == null && root.right == null){
//                 return 
//             }
//             if(root.left == null){
//                 return root.right
//             }
//             if(root.right == null){
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right, root.value)

//         }
//         return root
//     }
// }

// const bst = new BST()
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// // console.log(bst.search(bst.root, 57));
// // console.log(bst.min(bst.root));
// // bst.levelOrder()
// // console.log(bst.height(bst.root));
// // console.log(bst.secondLarge());
// bst.deleteNode(bst.root, 10)
// bst.inorder(bst.root)

// // console.log(bst)


// class Node {
//     constructor() {
//         this.children = {}
//         this.endword = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char] = new Node()
//             }
//             currentNode = currentNode.children[char]
//         }
//         currentNode.endword = true
//     }

//     search(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return currentNode.endword
//     }

//     startWith(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return true
//     }

//     autocomplete(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return []
//             }
//             currentNode = currentNode.children[char]
//         }
//         let list = []
//         this.colletword(currentNode, word, list)
//         return list
//     }

//     colletword(node, word, list){
//         if(node.endword){
//             list.push(word)
//         }
//         for(let char in node.children){
//             this.colletword(node.children[char], word+char, list)
//         }
//     }
// }

// const trie = new Trie()
// trie.insert(("app"))
// trie.insert(("apples"))
// trie.insert(("car"))

// // console.log(trie.search("appp"));
// // console.log(trie.startWith("f"));
// console.log(trie.autocomplete("a"));


class Graph{
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

    bfs(start){
        const queue = [start]
        const visited = {}
        const result = []
        visited[start] = true
        while(queue.length){
            let vertex = queue.shift()
            result.push(vertex)

            this.adjacencyList[vertex].forEach(neighbor =>{
                if(!visited[neighbor]){
                    queue.push(neighbor)
                    visited[neighbor] = true
                }
            })
        }
        return result
    }

    dfs(start){
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList;

        function dfsHelper(vertex){
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
        }
        dfsHelper(start)
        return result
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

graph.addEdges("A","C")
graph.addEdges("A","F")
graph.addEdges("C","B")
graph.addEdges("C","D")
graph.addEdges("B","A")
graph.addEdges("B","F")
graph.addEdges("B","C")
graph.addEdges("B","D")
graph.addEdges("B","E")
graph.addEdges("B","G")
graph.addEdges("F","G")
graph.addEdges("E","G")
graph.addEdges("E","D")

// console.log(graph.bfs("A"));
console.log(graph.dfs("A"));
