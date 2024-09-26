// class Node{
//     constructor(value){
//         this.value = value
//         this.size = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//     }

//     isEmpty(){
//         return this.size = 0
//     }

//     add(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.head = newNode
//         }else{
//             newNode.next = this.head
//             this.head = newNode
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("its empty");

//         }else{
//             let currentNode = this.head
//             while(currentNode){
//                 console.log(currentNode.value);
//                 currentNode = currentNode.next
//             }
//         }
//     }
// }

// const ll = new linkedList()

// ll.add(12)
// ll.add(14)
// ll.add(16)

// ll.print()

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("its empty");
    } else {
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }
}

const ll = new linkedList();

ll.add(12);
ll.add(14);
ll.add(16);

ll.print();
