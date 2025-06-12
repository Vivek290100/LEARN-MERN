//Stack
class Stack{
    constructor(){
        this.items = []
    }

    push(value){
        return this.items.push(value)
    }

    pop(){
        return this.items.pop()
    }

    reverseString(str){
        const newStack = new Stack()
        for(let i=0;i<str.length;i++){
            newStack.push(str[i])
        }
        let string = ''
        while(newStack.items.length>0){
            string+=newStack.items.pop()
        }
        return string
    }

    deleteMid(currentIndex = 0){
        if(this.items.length == 0){
            return 
        }

        const midInd = Math.floor(this.items.length/2)
        const top = this.pop()
        if(currentIndex!==midInd){
           return 
        }

        this.midInd(currentIndex+1)

        this.push(top)
    }


}

const stack = new Stack()
stack.push(13)
stack.push(23)
stack.push(3)


console.log(stack);
stack.deleteMid()
console.log(stack);

// console.log(stack.reverseString("vivek"));




//Queue
// class Queue{
//     constructor(){
//         this.items = []
//     }

//     enqueue(value){
//         return this.items.push(value)
//     }

//     dequeue(){
//         return this.items.shift()
//     }
// }

// const queue = new Queue()
// queue.push(13)
// queue.push(23)
// queue.push(3)




// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(item){
//         return this.items.push(item)
//     }

//     pop(){
//         return this.items.pop()
//     }

//     reverse(str){
//         const newStack = new Stack()
//         for(let i=0;i<str.length;i++){
//             newStack.push(str[i])
//         }
//         let string = ""
//         while(newStack.items.length>0){
//             string+= newStack.pop()
//         }
//         return string
//     }
// }


// const stack = new Stack()
// stack.push(13)
// stack.push(23)
// stack.push(3)

// console.log(stack.reverse("vivek"));









// class StackUsingQueues {
//     constructor() {
//         this.queue1 = [];
//         this.queue2 = [];
//     }

//     push(value) {
//         // Push value to queue2
//         this.queue2.push(value);

//         // Move all elements from queue1 to queue2
//         while (this.queue1.length) {
//             this.queue2.push(this.queue1.shift());
//         }

//         // Swap the names of the queues
//         [this.queue1, this.queue2] = [this.queue2, this.queue1];
//     }

//     pop() {
//         // Remove the front element from queue1
//         return this.queue1.shift();
//     }

//     top() {
//         // Get the front element of queue1 without removing it
//         return this.queue1[0];
//     }

//     isEmpty() {
//         return this.queue1.length === 0;
//     }
// }

// // Example usage
// const stack1 = new StackUsingQueues();
// stack1.push(1);
// stack1.push(2);
// stack1.push(3);
// console.log(stack1.pop()); // 3
// console.log(stack1.top()); // 2
// console.log(stack1.isEmpty()); // false




// class QueueUsingStacks {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

//     enqueue(value) {
//         // Push the value onto stack1
//         this.stack1.push(value);
//     }

//     dequeue() {
//         // If stack2 is empty, move elements from stack1 to stack2
//         if (this.stack2.length === 0) {
//             while (this.stack1.length) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         // Pop from stack2
//         return this.stack2.pop();
//     }

//     front() {
//         // If stack2 is empty, move elements from stack1 to stack2
//         if (this.stack2.length === 0) {
//             while (this.stack1.length) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         // Return the top element of stack2 without removing it
//         return this.stack2[this.stack2.length - 1];
//     }

//     isEmpty() {
//         return this.stack1.length === 0 && this.stack2.length === 0;
//     }
// }

// // Example usage
// const queue = new QueueUsingStacks();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.dequeue()); // 1
// console.log(queue.front()); // 2
// console.log(queue.isEmpty()); // false





// // Stack Using LinkedList
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null
//         this.size = 0
//     }


//     push(value){
//         const newNode = new Node(value)
//         if(!this.top){
//             this.top = newNode
//         }else{
//             newNode.next = this.top
//             this.top = newNode
//             this.size = 0
//         }
//     }

//     pop(){
//         let popped = this.top
//         this.top = this.top.next  
//         return popped.value
//     }

//     reverse(){
//         let prev = null
//         let current = this.top
//         let next = null
//         while(current){
//            next = current.next
//            current.next = prev
//            prev = current
//            current = next
//         }
//         this.top = prev
//     }

//     print(){
//         let current = this.top
//         while(current){
//             console.log(current.value);
//             current = current.next
//         }
//     }

//     // removeDuplicates(){
//     //     if(this.top == null){
//     //         return 
//     //     }
//     //     let current = this.top
//     //     let prev = null
//     //     const valSet = new Set()

//     //     while(current){
//     //         if(valSet.has(current.value)){
//     //             prev.next = current.next
//     //             this.size--
//     //         }else{
//     //             valSet.add(current.value)
//     //             prev = current
//     //             // this.size++
//     //         }
//     //         current = current.next
//     //     }
//     // }

//     removeDuplicates(){     //xxxxxxxxxxxxxxxxxxxxxxxxxxx
//         let current = this.top
//         while(current&&current.next){
//             if(current.value==current.next.value){
//                 current.next = current.next.next
//             }else{

//                 current = current.next
//             }
//         }
//     }
// }

// const stack = new Stack()

// stack.push(12)
// stack.push(13)
// stack.push(13)
// stack.push(112)
// stack.push(132)
// stack.push(132)
// stack.push(132)


// stack.removeDuplicates()
// stack.print()                                       