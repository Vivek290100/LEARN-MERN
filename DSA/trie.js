
// class Node{
//     constructor(){
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

//     startwith(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return true
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

//     autoComplete(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return []
//             }
//             currentNode = currentNode.children[char]
//         }
//         let list = []
//         this.collectwords(currentNode, word, list)
//         return list
//     }

//     collectwords(node, word, list){
//         if(node.endword){
//             list.push(word)
//         }
//         for(let char in node.children){
//             this.collectwords(node.children[char], word+char, list)
//         }
//     }
// }

// const trie = new Trie()

// trie.insert("apple")
// trie.insert("apples")
// trie.insert("jeep")

// console.log(trie.search("jeeps"));
// console.log(trie.startwith("e"));
// console.log(trie.autoComplete("a"));



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
            currentNode = currentNode.children[char]
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

    longestPrefix() {
        let currentNode = this.root;
        let prefix = "";
        while (currentNode) {
            const keys = Object.keys(currentNode.children);
            // console.log(keys);
            
            if (keys.length === 1 && !currentNode.endWord) {
                prefix += keys[0];
                currentNode = currentNode.children[keys[0]];
            } else {
                break;
            }
        }
        return prefix;
    }
}   

const trie = new Trie()

trie.insert("apple")
trie.insert("apples")
trie.insert("appless")

console.log(trie.search("bus"));
console.log(trie.startwith("a"));
console.log(trie.autocomplete("a"));
console.log(trie.longestPrefix());

