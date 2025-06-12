
// binary search
// function binarySearch(arr,target){
//     let start = 0
//     let end = arr.length-1
//     while(start <=end){
//         let mid = Math.floor((start+end)/2)
//         if(arr[mid] == target){
//             return true
//         }else if(arr[mid]< target){
//             start = mid+1
//         }else{
//             end = mid-1
//         }
//     }
//     return false
// }

// console.log(binarySearch([2,3,4,5,6,7,8,12,34,56,67],56));


// function binarySearch(arr, target, start = 0, end = arr.length-1){
//     if(start>end){
//         return false
//     }
//     let mid = Math.floor((start+end)/2)
//     if(arr[mid]==target){
//         return true
//     }else if(arr[mid]< target){
//         return binarySearch(arr, target, mid+1, end)
//     }else{
//         return binarySearch(arr, target, start, mid-1)
//     }
// }

// console.log(binarySearch([2,4,12,34,56,78],56));


// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(value){
//         return this.items.push(value)
//     }

//     pop(){
//         return this.items.pop
//     }
// }


// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// console.log(stack.items);


// function quick(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let pivot = arr[0]
//     let left = []
//     let right = []

//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
        
//     }
//     return [...quick(left),pivot,...quick(right)]
// }


// console.log(quick([2,4,6,7,9,7,5,3,3]));

// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     const mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)

//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right){
//     let result = []
//     while(left.length &&right.length){
//         if(left[0]<=right[0]){
//             result.push(left.shift())
//         }else{
//             result.push(right.shift())
//         }
//     }

//     return [...result,...left,...right]
// }


// console.log(mergeSort([3,4,5,2,3,4,9,6,3,2]));



// function sum(arr,i=0){
//     if(i>=arr.length){
//         return 0
//     }
//     return arr[i]+=sum(arr, i+1)
// }

// console.log(sum([2,3,4,5,6,7]));


// function sum(n){
//     if(n<=1){
//         return n
//     }
//     return sum(n-1)+sum(n-2)
// }

// console.log(sum(2));

// =====================================
// LinkedList
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
        return this.size == 0
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
        if (this.isEmpty()) {
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
        let current = this.head
        let next = null
        let prev= null

        while (current) {
            next = current.next
            current.next= prev
            prev = current
            current = next
        }
        this.head = prev
    }

    addAtK(value, position){
        const newNode = new Node(value)
        let current = this.head
        for (let i = 0; i < position-1; i++) {
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
    }

    deleteAtK(position){
        let current = this.head
        let prev = null
        for (let i = 0; i < position; i++) {
            prev = current
            current = current.next
        }
        prev.next = current.next
    }

    mid(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    deleteMid(){
        let slow = this.head
        let fast = this.head
        let prev = null

        while(fast && fast.next){
            fast = fast.next.next
            prev = slow
            slow = slow.next
        }
        if(prev){
            prev.next = slow.next
        }
        this.size--
    }

    print(){
        if (this.isEmpty()) {
            return "its empty"
        }else{
            let current = this.head
            while (current) {
                console.log(current.value);
                current = current.next
            }
        }
    }
}

const LL = new LinkedList()
// LL.addFirst(12)
// LL.addFirst(122)
// LL.addFirst(123)

LL.addLast(1255)
LL.addLast(12255)
LL.addLast(12355)



// LL.reverse()
// LL.addAtK(100,2)
// LL.deleteAtK(2)
// console.log(LL.mid().value);
LL.deleteMid()
LL.print()



// ==========================
// Stack
// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(value){
//         this.items.push(value)
//     }

//     pop(){
//         this.items.pop()
//     }

//     reverseString(name){
//         const newStack = new Stack()
//         for (let i = 0; i < name.length; i++) {
//             newStack.push(name[i])
//         }
//         let ans = ""
//         while (newStack.items.length>0) {
//             ans+=newStack.items.pop()
//         }
//         return ans
//     }

//     reverserStack(arr){
        
//     }
// }

// const stack = new Stack()
// console.log(stack.reverseString("vivek"));