// //Stack
// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(value){
//         return this.items.push(value)
//     }

//     pop(){
//         return this.items.pop()
//     }

//     reverseString(str){
//         const newStack = new Stack()
//         for(let i=0;i<str.length;i++){
//             newStack.push(str[i])
//         }
//         let string = ''
//         while(newStack.items.length>0){
//             string+=newStack.pop()
//         }
//         return string
//     }
// }

// const stack = new Stack()
// stack.push(13)
// stack.push(23)
// stack.push(3)

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




class Stack{
    constructor(){
        this.items = []
    }

    push(item){
        return this.items.push(item)
    }

    pop(){
        return this.items.pop()
    }

    reverse(str){
        const newStack = new Stack()
        for(let i=0;i<str.length;i++){
            newStack.push(str[i])
        }
        let string = ""
        while(newStack.items.length>0){
            string+= newStack.pop()
        }
        return string
    }
}


const stack = new Stack()
stack.push(13)
stack.push(23)
stack.push(3)

console.log(stack.reverse("vivek"));
