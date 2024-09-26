class Node{
    constructor(){
        this.children = {}
        this.endword = false
    }
}

class trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let currentWord = this.root
        for(let char of word){
            if(!currentWord.children[char]){
                currentWord.children[char] = new Node()
            }
            currentWord = currentWord.children[char]
        }
        currentWord.endword = true
    }

    search(word){
        let currentWord = this.root
        for(let char of word){
            if(!currentWord.children[char]){
                return false
            }
            currentWord = currentWord.children[char]
        }
        return currentWord.endword
    }

    startwith(word){
        let currentWord = this.root
        for(let char of word){
            if(!currentWord.children[char]){
                return false
            }
            currentWord = currentWord.children[char]
        }
        return true
    }
}



const tries = new trie()

tries.insert("bus")
tries.insert("bike")
tries.insert("bikes")
tries.insert("jeep")

console.log(tries.search("car"));
console.log(tries.search("bus"));
console.log(tries.startwith("b"));
