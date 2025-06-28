class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root= null
    }

    isEmpty(){
        return this.root == null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            return this.insertNode(this.root,newNode)
        }
    }

    insertNode(root, node){
        if(root.value>node.value){
            if(root.left == null){
                root.left = node
            }else{
                return this.insertNode(root.left, node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
                return this.insertNode(root.right, node)
            }
        }
    }

    inOrder(root){
        if(!root){
            return "its empty"
        }else{
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
}


const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(13)
bst.insert(17)


bst.inOrder(bst.root)
