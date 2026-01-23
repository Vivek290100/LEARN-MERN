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
  }

  collectword(node, word, list){
    if(word.endword){
      list.push(word)
    }
    for(let char in node.children){
      this.collectword(node.children[char],word+char,list)
    }
  }
}

const trie = new Trie()
trie.insert("a")
trie.insert("p")
trie.insert("p")
trie.insert("l")
trie.insert("e")

console.log(trie.search("apple"));
