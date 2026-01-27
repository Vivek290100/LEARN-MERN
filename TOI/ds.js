class Stack{
  constructor(){
    this.items = []
  }

  push(value){
    this.items.push(value)
  }

  pop(){
    return this.items.pop()
  }

  deleteMid( currentIndex = 0){
    
    if(this.items.length == 0){
      return 
    }
    let mid = Math.floor(this.items.length/2)
    let top = this.pop()
    if(currentIndex != mid){
      this.deleteMid(currentIndex+1)
      this.push(top)
    }
  }

  reverseString(str){
    const newStack = new Stack()
    for (let i = 0; i < str.length; i++) {
      newStack.push(str[i])
    }
    let ans = ""
    while(newStack.items.length>0){
      ans+=newStack.items.pop()
    }
    return ans
  }
}

const stack = new Stack()
stack.push(12)
stack.push(123)
stack.push(142)
// console.log(stack.items);
// stack.deleteMid()
// console.log(stack.items);
console.log(stack.reverseString("vivek"));

