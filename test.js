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
  }
  
  List = new linkedlist
  List.add(12)
  List.add(54)
  List.add(43)
  
  List.addLast(11)
  List.addLast(22)
  List.addLast(33)
  
  List.reverse()
  
  List.addAtk(100,2)
  List.deletek(3)
  List.print()
  console.log(List.search(123));
  console.log(List.checkcircular());
  