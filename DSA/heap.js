
// Operation	    Time Complexity
// Insert	        O(log n)
// RemoveMin	    O(log n)
// Heapify Up	    O(log n)
// Heapify Down	    O(log n)
// Peek (Get Min)	O(1)
// Heap Sort	    O(n log n)


class MinHeap {
    constructor() {
        this.heap = [];
    }
    getParentIndex(childInd) {
        return parseInt((childInd - 1) / 2)
    }
    getLeftChildIndex(parentInd) {
        return (parentInd * 2) + 1
    }
    getRightChildIndex(parentInd) {
        return (parentInd * 2) + 2
    }
    getParent(index) {
        return this.heap[this.getParentIndex(index)]
    }
    getRightChild(index) {
        return this.heap[this.getRightChildIndex(index)]
    }
    hasParent(index) {
        return this.heap[this.getParentIndex(index)] >= 0
    }
    // hasLeftChildIndex(index) {
    //     return this.heap[this.getLeftChildIndex(index)] < this.heap.length
    // }
    // hasRightChildIndex(index) {
    //     return this.heap[this.getRightChildIndex(index)] < this.heap.length
    // }
    swap(ind1, ind2) {
        [this.heap[ind1], this.heap[ind2]] = [
            this.heap[ind2],
            this.heap[ind1]
        ]
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp()
    }
    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (this.hasParent(currentIndex) && this.heap[currentIndex] < this.getParent(currentIndex)) {
            this.swap(currentIndex, this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex);
        }
    }
    removeMin() {
        let removedValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return removedValue
    }
    heapifyDown() {
        let currentIndex = 0;
        while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
            let smallerIndex = this.getLeftChildIndex(currentIndex)
            if (this.getRightChildIndex(currentIndex) < this.heap.length && this.getRightChild(currentIndex) < this.heap[smallerIndex]) {
                smallerIndex = this.getRightChildIndex(currentIndex)
            }
            if (this.heap[currentIndex] < this.heap[smallerIndex]) {
                break;
            } else {
                this.swap(currentIndex, smallerIndex)
            }
            currentIndex = smallerIndex;
        }
    }
}

function heapSort(arr) {
    let sorted = [];
    let heap1 = new MinHeap()
    for (let i = 0; i < arr.length; i++) {
        heap1.insert(arr[i])
    }
    for (let i = 0; i < arr.length; i++) {
        sorted.push(heap1.removeMin())
    }
    return sorted
}

const heap = new MinHeap()
heap.insert(10)
heap.insert(4)
heap.insert(11)
heap.insert(6)
heap.removeMin()
console.log(heap)
console.log(heapSort([34,6,12,8,23,1]))




// Sort without heapifyDown

// class Heap{
//     constructor(){
//       this.heap = []
//     }
  
//     getparentInd(index){
//       return Math.floor((index-1)/2)
//     }
  
//     getLeftchildInd(parentInd){
//       return (parentInd*2)+1
//     }
  
//     getRightchildInd(parentInd){
//       return (parentInd*2)+2
//     }
  
//     getParent(index){
//       return this.heap[this.getparentInd(index)]
//     }
//     getLeftchild(index){
//       return this.heap[this.getLeftchildInd(index)]
//     }
//     getrightchild(index){
//       return this.heap[this.getRightchildInd(index)]
//     }
//     hasParent(index) {
//       return index > 0;
//     }
      
  
//     swap(ind1,ind2){
//       [this.heap[ind1],this.heap[ind2]] = [this.heap[ind2], this.heap[ind1]]
//     }
  
//     insert(value){
//       this.heap.push(value)
//       this.heapifyUp()
//     }
  
//     heapifyUp(){
//       let currentInd = this.heap.length-1
//       while(this.hasParent(currentInd)&&this.heap[currentInd]<this.getParent(currentInd)){
//         this.swap(currentInd,this.getparentInd(currentInd))
//         currentInd = this.getparentInd(currentInd)
//       }
//     }
  
//     remove(){   //rebuild
//       let removeVal = this.heap[0]
//       this.heap[0] = this.heap.pop()
//       const temp = [...this.heap]
//       this.heap = []
//       for(const val of temp){
//         this.insert(val)
//       }
//       return removeVal
//     }
  
//     sort(arr){
//       const result = []
//       for (let i = 0; i < arr.length; i++) {
//         this.insert(arr[i])
        
//       }
//       for (let i = 0; i < this.heap.length; i++) {
//         result.push(this.remove())
        
//       }
//       return result
//     }
//   }
  
  
  
//   const heap = new Heap()
  
//   heap.insert(23)
//   heap.insert(233)
//   heap.insert(243)
//   heap.insert(43)
  
//   console.log(heap.sort([3,6,4,5,1,9,2,8]));




// function heapSort(arr){
//     let n = arr.length;
//     for(let i= Math.floor((n/2)-1);i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i =n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
// }
// function heapify(arr,n,i){
//     let largest = i;
//     let left = 2*i+1
//     let right = 2*i+2

//     if(left<n && arr[left]>arr[largest]){
//         largest = left
//     }
//     if(right<n && arr[right]>arr[largest]){
//         largest=right
//     }
//     if(largest !==i){
//         [arr[i],arr[largest]] =[arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }
// }
// let arr = [12,7,4,23,8]
// heapSort(arr)
// console.log(arr)