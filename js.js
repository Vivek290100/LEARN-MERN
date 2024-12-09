
// class Heap{
//     constructor(){
//         this.heap = []
//     }
//     getParentInd(index){
//         return Math.floor((index-1)/2)
//     }
//     getLeftChildInd(index){
//         return (index*2)+1
//     }
//     getRightChildInd(index){
//         return (index*2)+2
//     }
//     getParent(index){
//         return this.heap[this.getParentInd(index)]
//     }
//     getLeftChild(index){
//         return this.heap[this.getLeftChildInd(index)]
//     }
//     getRightChild(index){
//         return this.heap[this.getRightChildInd(index)]
//     }
//     hasParent(index){
//         return index>0
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     swap(ind1,ind2){
//         [this.heap[ind1],this.heap[ind2]] = [this.heap[ind2], this.heap[ind1]]
//     }

//     heapifyUp(){
//         let currentInd = this.heap.length-1
//         while(this.hasParent(currentInd)&&this.heap[currentInd]<this.getParent(currentInd)){
//             this.swap(currentInd,this.getParentInd(currentInd))
//             currentInd = this.getParentInd(currentInd)
//         }
//     }

//     remove(){
//         let removeVal = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         const temp = [...this.heap]
//         this.heap = []
//         for (let i = 0; i < temp.length; i++) {
//             this.insert(temp[i])
            
//         }
//         return removeVal
//     }

//     sort(arr){
//         const result = []
//         for (let i = 0; i < arr.length; i++) {
//             this.insert(arr[i])
//         }
//         for (let i = 0; i < arr.length; i++) {
//            result.push(this.remove())
            
//         }
//         return result
//     }
// }

// const heap1 = new Heap()

// heap1.insert(235)
// heap1.insert(23)
// heap1.insert(213)
// heap1.insert(234)


// console.log(

//     heap1.sort([3,2,5,4,1,6,8,7])

// );

  
  


const str = "qwertyuittyuuuiop"

// function findlong(str){
//     let longest = ""
//     for (let i = 0; i < str.length; i++) {
//         let count = 1
//         let string = ""
//         while(str[i] == str[i+1]){
//             count++
//             string+=str[i]
//             i++
//         }
        
//         if(count>longest.length){
//             longest=string+str[i]
//         } 
//     }
//     return longest
// }

// console.log(findlong(str));
// function fun(arr){
//     let longest = 0
//     for (let i = 0; i < arr.length; i++) {
//         let count = 1
//         while(arr[i]==arr[i+1]){
//             count++
//             i++
//         }
//         if(longest<count){
//             longest = count
//         }
//     }
//     return longest
// }
// console.log(fun(str));




// function reverse(arr){
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i]
//         let reverseNum = 0
//         while(num>0){
//             let remains = num%10
//             reverseNum = reverseNum*10+remains
//             num = Math.floor(num/10)
//         }
//         result.push(reverseNum)
//     }
//     return result
// }




// console.log(reverse([123, 345, 876, 456]))


// class People{
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }
// }

// const hi = new People("vivek", "email.com")

// console.log(hi.name);



let x = 10; // Outer variable

function example() {
    let x = 20;
    console.log(x); 
}

example();
console.log(x); 










