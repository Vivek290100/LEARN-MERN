class MaxHeap{
  constructor(){
    this.heap = []
  }

  getParentind(i){
    return Math.floor((i-1/2))
  }
  getLeftind(i){
    return (2*i)+1
  }
  getParentind(i){
    return (2*i)+2
  }

  swap(){
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  insert(value){
    this.heap.push(value)
    this.heapifyUp()
  }

  heapifyUp(){
    let i = this.heap.length-1
    while(i>0 && this.heap[i]>this.heap[this.getParentind[i]]){
      this.swap(i,this.getParentind(i))
      i=this.getParentind(i)
    }
  }

}