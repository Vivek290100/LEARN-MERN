// Worst Case (Unbalanced BST)
// - Search:  O(n)
// - Insert:  O(n)
// - Delete:  O(n)
// Average Case (Balanced BST)
// - Search:  O(log n)
// - Insert:  O(log n)
// - Delete:  O(log n)



class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

}


class bst {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                return this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                return this.insertNode(root.right, newNode)
            }
        }
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)

        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (root.value > value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    levelorder() {
        let arr = []
        arr.push(this.root)
        while (arr.length) {
            let curr = arr.shift()
            console.log(curr.value);
            if (curr.left) {
                arr.push(curr.left)
            }
            if (curr.right) {
                arr.push(curr.right)
            }
        }
    }

    min(root = this.root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    height(root = this.root) {
        if (!root) {
            return -1
        }
        const left = this.height(root.left)
        const right = this.height(root.right)
        return Math.max(left, right) + 1
    }

    seconDLarge() {
        let arr = []
        this.helper(this.root, arr)
        return arr[1]
    }

    helper(root, arr) {
        if (root == null) {
            return arr
        }
        this.helper(root.right, arr)
        arr.push(root.value)
        this.helper(root.left, arr)
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (!root) {
            return
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (root.left == null && root.right == null) {
                return
            }
            if (root.left == null) {
                return root.right
            }
            if (root.right == null) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)

        }
        return root
    }
}

const BST = new bst()

BST.insert(12)
BST.insert(126)
BST.insert(42)
BST.insert(122)
BST.insert(123)
BST.insert(124)
BST.insert(125)
BST.insert(126)

// BST.inorder(BST.root)
// BST.levelorder(BST.root)
// console.log(BST.search(BST.root,126));
// console.log(BST.min())
// bst.deleteNode(BST.root, 10)


console.log(BST.height());




