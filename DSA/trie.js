class Node{
    constructor(){
        this.children = {}
        this.endword = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let currentNode = this.root
        for(let char of word){
            if(!currentNode.children[char]){
                currentNode.children[char] = new Node()
            }
            currentNode = currentNode.children[char]
        }
        currentNode.endword = true
    }

    search(word){
        let currentNode = this.root
        for (let char of word){
            if(!currentNode.children[char]){
                return false
            }
            currentNode = currentNode.children[char]
        }
        return currentNode.endword
    }

    startwith(word){
        let currentNode = this.root
        for(let char of word){
            if(!currentNode.children[char]){
                return false
            }
            currentNode = currentNode.children[char]
        }
        return true
    }

    autocomplete(word){
        let currentNode = this.root
        for(let char of word){
            if(!currentNode.children[char]){
                return []
            }
        }
        let list = []
        this.collectwords(currentNode, word, list)
        return list
    }

    collectwords(node, word, list){
        if(node.endword){
            list.push(word)
        }
        for(let char in node.children){
            this.collectwords(node.children[char], word+char, list)
        }
    }
}

const trie = new Trie()

trie.insert("apple")
trie.insert("apples")
trie.insert("appless")
trie.insert("car")

console.log(trie.search("bus"));
console.log(trie.startwith("a"));
console.log(trie.autocomplete("a"));
