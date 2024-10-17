class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  addFirst(value){
    const newNode = new Node(value)
    if(this.isEmpty()){
      this.head = newNode
    }else{
      newNode.next = this.head
      this.head = newNode
    }
    this.size++
  }

  addLast(value){
    const newNode = new Node(value)
    if(this.isEmpty()){
      this.head = newNode
    }else{
      let current = this.head
      while(current.next){
        current = current.next
      }
      current.next = newNode
    }
    this.size++

  }

  removeDuplicates(){
    if(this.isEmpty()){
      return
    }
    let current = this.head
    let prev = null
    const valSet = new Set()

    while(current){
      if(valSet.has(current.value)){
        prev.next = current.next
        this.size--
      }else{
        valSet.add(current.value)
        prev = current
      }
      current = current.next
    }
  }

  print(){
    let current = this.head
    while(current){
      console.log(current.value);
      current = current.next
    }
  }
}

const ll = new LinkedList()
ll.addFirst(12)
ll.addFirst(126)
ll.addFirst(125)
ll.addFirst(125)
ll.addFirst(125)
ll.addFirst(125)
ll.addFirst(124)



console.log("**************");
ll.removeDuplicates()
ll.print()


