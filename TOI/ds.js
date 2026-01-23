class Node {
  constructor() {
    this.children = {}
    this.endword = false
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word) {
    let currentNode = this.root
    for (const char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node()
      }
      currentNode = currentNode.children[char]
    }
    currentNode.endword = true
  }

  search(word) {
    let currentNode = this.root
    for (const char of word) {
      if (!currentNode.children[char]) {
        return false
      }
      currentNode = currentNode.children[char]
    }
    return currentNode.endword
  }

  startWith(word) {
    let currentNode = this.root
    for (const char of word) {
      if (!currentNode.children[char]) {
        return false
      }
      currentNode = currentNode.children[char]
    }
    return true
  }

  authoComplete(word) {
    let currentNode = this.root
    for (const char of word) {
      if (!currentNode.children[char]) {
        return []
      }
      currentNode = currentNode.children[char]
    }
    let list = []
    this.collectword(currentNode,word,list)
    return list
  }

  collectword(node, word, list){
    if(node.endword){
      list.push(word)
    }
    for(let char in node.children){
      this.collectword(node.children[char],word+char,list)
    }
  }
}

const trie = new Trie()
trie.insert("apple")
trie.insert("banana")
trie.insert("app")


console.log(trie.search("apple"));
console.log(trie.startWith("ap"));
console.log(trie.authoComplete("ap"));
