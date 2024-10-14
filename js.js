class MinHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(childInd){
        return Math.floor((childInd-1)/2)
    }

    getLeftChildInd(parentInd){
        return (parentInd*2)+1
    }
    
    getRightChildInd(parentInd){
        return (parentInd*2)+2
    }

    getParent(index){
        return this.heap[this.getParentIndex(index)]
    }

    getLeftChild(index){
        return this.heap[this.getParentIndex(index)]
    }

    getRightChild(index){
        return this.heap[this.getRightChildInd(index)]
    }

    hasParent(index){
        return this.heap[this.getParentIndex(index)] >= 0
    }

    hasLeftChild(index){
        return this.heap[this.getLeftChildInd(index)] > this.heap.length
    }
    hasRighttChild(index){
        return this.heap[this.getRightChildInd(index)] > this.heap.length
    }

    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let currentIndex = this.heap.lengrt-1
        while(this.hasParent(currentIndex) && this.heap[currentIndex] < this.getParent(currentIndex))
        this.swap(currentIndex, this.getParentIndex(currentIndex))
        currentIndex = this.getParentIndex(currentIndex)
    }

}

const heap = new MinHeap()
heap.insert(12)
heap.insert(162)
heap.insert(125)

console.log(heap);


