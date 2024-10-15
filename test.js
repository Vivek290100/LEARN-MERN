class MinHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(childInd){
        return Math.floor((childInd-1)/2)
    } 

    getLeftChildInd(parentInd){
        return parentInd*2+1
    }

    getRightChildInd(parentInd){
        return parentInd*2+2
    }

    getParent(index){
        return this.heap[this.getParentIndex(index)]
    }
    getLeftChild(index){
        return this.heap[this.getLeftChildInd(index)]
    }
    getRightChild(index){
        return this.heap[this.getRightChildInd(index)]
    }

    hasParent(index){
        return this.heap[this.getLeftChildInd(index)] >=0
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    swap(ind1, ind2){
        [this.heap[ind1],this.heap[ind2]] = [this.heap[ind2],this.heap[ind1]]
    }

    heapifyUp(){
        let currentIndex = this.heap.length-1
        while(this.hasParent(currentIndex) && this.heap[currentIndex] < this.getParent(currentIndex)){
            this.swap(currentIndex, this.getParent(currentIndex))
        }
        currentIndex = this.getParentIndex(currentIndex)
    }

        // removeMin(index){
        //     let currentIndex = 0
        //     while()

        // }
}

function heapSort(arr){
    let result = []
    let heap1 = new MinHeap()

    for(let i=0;i<arr.length;i++){
        heap1.insert(arr[i])
    }

    for(let i=0;i<arr.length;i++){
        result.push(heap1.removeMin())
    }
    return result
}

const heap = new MinHeap()
heap.insert(12)
heap.insert(142)
heap.insert(112)
heap.insert(123)

console.log(heap);
console.log(heapSort([34,6,12,8,23,1]))

