// const ws = new WeakSet()

// let obj = {
//     name:"vivek"
// }

// ws.add(obj)


// console.log(ws);// Object may be garbage-collected



class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
  }
  
  class linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEMpty(){
        return this.size === 0
    }
  
    add(value){
        const newNode = new Node(value)
        if(this.isEMpty()){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
  
    addLast(value) {
        const newNode = new Node(value)
        if(this.isEMpty()){
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
  
    reverse(){
        let next = null
        let current = this.head
        let prev = null
  
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
    addAtk(value, position){
        const newNode = new Node(value)
        let current = this.head
        for(let i=1;i<position-1;i++){
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
    }
  
    deletek(position){
        let current = this.head 
        let previous = null
        for(let i=1;i<position;i++){
            previous = current
            current = current.next
        }
        previous.next = current.next
    }
  
    search(value){
        let current = this.head
        while(current){
            if (current.value == value) {
                return true
            }
            current = current.next
        }
        return false
    }
  
    checkcircular(){
        if(this.head === null){
            return false
        }
        let current = this.head.next
        while(current!=null && current!=this.head){
            current = current.next
        }
        return current==this.head
    }

    makeItCircular(){
        if(this.head==null){
            return 
        }
        let current = this.head
        while(current.next !=null){
            current = current.next
        }
        current.next = this.head
        
    }

    removeDuplicates(){
        if(this.isEMpty()){
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
        if(this.isEMpty()){
            console.log("its empty");
        }else{
            let current = this.head
            while(current){
                console.log(current.value);
                current = current.next
            }
        }
    }

    LLtoArray(){
        let current = this.head
        let result = []
        while(current){
            result.push(current.value)
            current = current.next
        }
        return result
    }

    ArrayToLinkedList(arr){
        for(let i=0;i<arr.length;i++){
            this.addLast(arr[i])
        }
    }
  }
  
  List = new linkedlist
  List.add(12)
  List.add(54)
  List.add(43)
  List.add(43)
  
  List.addLast(11)
  List.addLast(22)
  List.addLast(33)
  
  List.reverse()
  console.log("********print all*******");
  List.print()
  
  List.addAtk(100,2)
  console.log("********after add at k*******");
  List.print()

  List.deletek(3)
  console.log("********after delete at k*******");
  List.print()

  console.log("search");
  console.log(List.search(123));

  console.log("circular");
  List.makeItCircular()
  console.log(List.checkcircular());

  console.log("***************dup removed");
  List.removeDuplicates()
  List.print()


let arr = [1,3,5,2,3,6,9,7]
console.log(List.LLtoArray());
List.ArrayToLinkedList(arr)
List.print()
  
  
  
  
  