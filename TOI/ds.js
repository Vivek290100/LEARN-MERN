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

//     insertNode(root,node){
//         if(root.value>node.value){
//             if(root.left == null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left, node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right, node)
//             }
//         }
//     }

//     inOrder(root){
//         if(!root){
//             return "empty"
//         }else{
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
            
//         }
//     }
//     postOrder(root){
//         if(!root){
//             return "empty"
//         }else{
//             this.inOrder(root.left)
//             this.inOrder(root.right)
//             console.log(root.value);
            
//         }
//     }
//     preOrder(root){
//         if(!root){
//             return "empty"
//         }else{
//             console.log(root.value);
//             this.inOrder(root.left)
//             this.inOrder(root.right)
            
//         }
//     }

//     levelOrder(){
//         let arr = []
//         arr.push(this.root)
//         while(arr.length){
//             let node = arr.shift()
//             console.log(node.value);
//             if(node.left){
//                 arr.push(node.left)
//             }
//             if(node.right){
//                 arr.push(node.right)
//             }
//         }
//     }

//     search(root, value){
//         if(!root){
//             return "empty"
//         }else{
//             if(root.value == value){
//                 return true
//             }else if(root.left>value){
//                 this.search(root.left, value)
//             }else{
//                 this.search(root.right, value)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left.value)
//         }
//     }
// }


// const bst = new BST()
// bst.insert(12)
// bst.insert(125)
// bst.insert(124)
// bst.insert(123)


// // bst.inOrder(bst.root)
// bst.levelOrder()

