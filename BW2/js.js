// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST{
//     constructor(){
//         this.root= null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             return this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root, node){
//         if(root.value>node.value){
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

//     inOrder(root){
//         if(!root){
//             return "its empty"
//         }else{
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
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

//     height(root){
//         if(!root){
//             return -1
//         }
//         const left = this.height(root.left)
//         const right = this.height(root.right)
//         return Math.floor(left, right)+1
//     }

//     largest(){
//         let arr = []
//         this.longestNum(this.root, arr)
//         return arr[1]
//     }

//     longestNum(root, arr){
//         if(!root){
//             return arr
//         }else{
//             this.longestNum(root.right, arr)
//             arr.push(root.value)
//             this.longestNum(root.left, arr)
//         }
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root, value)
//     }

//     deleteNode(root, value){
//         if(!root){
//             return 
//         }
//         if(root.value > value){
//             root.left = this.deleteNode(root.left, value)
//         }else if(root.value < value){
//             root.right = this.deleteNode(root.right, value)
//         }else{
//             if(!root.left && !root.right){
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
// bst.insert(13)
// bst.insert(17)


// // bst.inOrder(bst.root)
// // bst.levelOrder(bst.root)
// // console.log(bst.min(bst.root));
// // console.log(bst.height(bst.root));

// // console.log(bst.search(bst.root, 174));
// // console.log(bst.largest());
// bst.delete(15)
// bst.inOrder(bst.root)






// class Node{
//     constructor(){
//         this.children = {}
//         this.endWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let currentNode =this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char] = new Node()
//             }
//             currentNode = currentNode.children[char]
//         }
//         currentNode.endWord = true
//     }

//     search(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return currentNode.endWord
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

//     autoComplete(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return []
//             }
//             currentNode = currentNode.children[char]
//         }
//         let list = []
//         this.autoCompleteHelper(currentNode, word, list)
//         return list
//     }

//     autoCompleteHelper(node, word, list){
//         if(node.endWord){
//             list.push(word)
//         }
//         for(let char in node.children){
//             this.autoCompleteHelper(node.children[char], word+char, list)
//         }
//     }

//     longestPrefix(){
//         let currentNode = this.root
//         let prefix = ""
//         while(currentNode){
//             const key = Object.keys(currentNode.children)
//             if(!currentNode.endWord){
//                 prefix+=key[0]
//                 currentNode = currentNode.children[key[0]]
//             }else{
//                 break
//             }
//         }
//         return prefix
//     }
// }


// const trie = new Trie()
// trie.insert("vivek")
// trie.insert("vivek1")
// trie.insert("vivek2")
// // console.log(trie.search("vivek4"));
// // console.log(trie.startWith("v"));
// // console.log(trie.autoComplete("v"));
// console.log(trie.longestPrefix());


// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = []
//         }
//     }

//     addEdges(vertex1, vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)
//     }

//     bfs(start){
//         const queue = [start]
//         const result = []
//         const visited = []
//         visited[start] = true

//         while(queue.length){
//             let vertex = queue.shift()
//             result.push(vertex)

//             this.adjacencyList[vertex].forEach(element=>{
//                 if(!visited[element]){
//                     queue.push(element)
//                     visited[element] = true
//                 }
//             })
//         }
//         return result
//     }

//     dfs(start){
//         const result = []
//         const visited = {}
//         const adjacencyList = this.adjacencyList

//         function dfshelper(vertex){
//             if(!vertex) return
//             result.push(vertex)
//             visited[vertex] = true

//             adjacencyList[vertex].forEach(element =>{
//                 if(!visited[element]){
//                     dfshelper(element)
//                 }
//             })
//         }
//         dfshelper(start)
//         return result
//     }
// }

// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addEdges("A", "B")
// graph.addEdges("A", "C")
// graph.addEdges("B", "D")
// graph.addEdges("C", "D")
// console.log(graph.adjacencyList)
// console.log(

//     graph.dfs("A")
// );



// class MinHeap{
//     constructor(){
//         this.heap = []
//     }
//     getParentIndex(childInd){
//         return Math.floor((childInd-1)/2)
//     }
//     getLeftChildInd(ParentInd){
//         return (ParentInd*2)+1
//     }
//     getRightChildInd(ParentInd){
//         return (ParentInd*2)+2
//     }
//     getParent(index){
//         return this.heap[this.getParentIndex(index)]
//     }
//     getLeftChild(index){
//         return this.heap[this.getLeftChildInd(index)]
//     }
//     getRightChild(index){
//         return this.heap[this.getRightChildInd(index)]
//     }
//     hasParent(index){
//         return this.getParentIndex(index)>=0
//     }

//     swap(ind1, ind2){
//         [this.heap[ind1], this.heap[ind2]] = [this.heap[ind2], this.heap[ind1]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }


// }



// function heapSort(arr) {
//     let n = arr.length;
//     // Step 1: Build Max Heap
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }
//     // Step 2: Extract elements one by one
//     for (let i = n - 1; i > 0; i--) {
//         // Swap root with last element
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         // Heapify reduced heap
//         heapify(arr, i, 0);
//     }
//     return arr;
// }
// function heapify(arr, heapSize, rootIndex) {
//     let largest = rootIndex;
//     let left = 2 * rootIndex + 1;
//     let right = 2 * rootIndex + 2;

//     if (left < heapSize && arr[left] > arr[largest]) {
//         largest = left;
//     }
//     if (right < heapSize && arr[right] > arr[largest]) {
//         largest = right;
//     }
//     if (largest !== rootIndex) {
//         [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
//         heapify(arr, heapSize, largest);
//     }
// }
// console.log(heapSort([4, 10, 3, 5, 1])); // [1, 3, 4, 5, 10]



function heapSort(arr){
    let n = arr.length
    for (let i = Math.floor(n/2)-1; i >= 0; i--) {
        heapify(arr,n,i)
        
    }
    for (let i = n-1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr,i,0)
    }
    return arr
}

function heapify(arr, heapSize, rootIndex){
    let largest = rootIndex
    left = 2*rootIndex+1
    right = 2*rootIndex+2
    if(left < heapSize && arr[left] > arr[largest]){
        largest = left
    }
    if(right < heapSize && arr[right] > arr[largest]){
        right = left
    }

    if(largest !== rootIndex){
        [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]]
        heapify(arr, heapSize, largest)
    }
}

console.log(heapSort([2,8,6,4,1,0]));
