// const arr =  [1,4,2,7,9,13]


// function prime(arr,i=0,j=2){

//     let ans = 0
//     let isPrime = true
//     if(arr[i]<2){
//         return
//     }

//     if(arr[i]%j==0){
//         isPrime = false
//     }
//     if(isPrime){
//         ans+=prime(arr,i++, j=i)
//     }

// }

// var ans = 50
// function fun(){
//     var ans = 10
//     function fun1(){
//         console.log(ans);
//     }
//     fun1()
// }
// fun()

// const arr = [2, 3, 1, 1, 6, 7, 7, 4, 4];
// let array = [];
// for (let i = 0; i < arr.length; i++) {
//     let flag = false
//   for (let j = 0; j < array.length; j++) {
//     if(arr[i]==array[j]){
//         flag = true
//     }
//   }
//   if(!flag){
//     array.push(arr[i])
//   }
// }
// console.log(array);

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(root, node) {
//     if (node.value < root.value) {
//       if (root.left === null) {
//         root.left = node;
//       } else {
//         this.insertNode(root.left, node);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = node;
//       } else {
//         this.insertNode(root.right, node);
//       }
//     }
//   }

//   inorder(root) {
//     if (root) {
//       this.inorder(root.left);
//       console.log(root.value);
//       this.inorder(root.right);
//     }
//   }

//   search(root = this.root, value) {
//     if (!root) {
//       return false;
//     } else {
//       if (root.value == value) {
//         return true;
//       } else if (value < root.value) {
//         return this.search(root.left, value);
//       } else {
//         return this.search(root.right, value);
//       }
//     }
//   }

//   min(root) {
//     if (!root.left) {
//       return root.value;
//     } else {
//       return this.min(root.left);
//     }
//   }

//   height(root) {
//     if (!root) {
//       return -1;
//     }
//     let left = this.height(root.left);
//     let right = this.height(root.right);
//     return Math.max(left, right) + 1;
//   }

//   levelorder() {
//     let arr = [];
//     arr.push(this.root);
//     while (arr.length) {
//       let current = arr.shift();
//       console.log(current.value);
//       if (current.left) {
//         arr.push(current.left);
//       }
//       if (current.right) {
//         arr.push(current.right);
//       }
//     }
//   }

//   findLarge(){
//     let arr = []
//     this.helper(arr,this.root)
//     return arr
//   }

//   helper(arr,root){
//     if(!root){
//       return
//     }
//       this.helper(arr,root.right)
//       arr.push(root.value)
//       this.helper(arr,root.left)

//   }
// }

// const bst = new BST();
// bst.insert(23);
// bst.insert(235);
// bst.insert(234);
// bst.insert(4);

// console.log(

//   bst.findLarge()
// );

// class Graph{
//   constructor(){
//     this.adjacencylist = {}
//   }

//   addVertex(vertex){
//     if(!this.adjacencylist[vertex]){
//       this.adjacencylist[vertex] = []
//     }
//   }

//   addEdges(vertex1, vertex2){
//     if(!this.adjacencylist[vertex1]){
//       this.addVertex(vertex1)
//     }
//     if(!this.adjacencylist[vertex2]){
//       this.addVertex(vertex2)
//     }

//     this.adjacencylist[vertex1].push(vertex2)
//     this.adjacencylist[vertex2].push(vertex1)
//   }

//   bfs(start){
//     const queue = [start]
//     const result = []
//     const visited = {}
//     visited[start] = true

//     while(queue.length){
//       let vertex = queue.shift()
//       result.push(vertex)

//       this.adjacencylist[vertex].forEach(neighbor=>{
//         if(!visited[neighbor]){
//           queue.push(neighbor)
//           visited[neighbor] = true
//         }
//       })
//     }
//     return result
//   }

//   dfs(start){
//     const result = []
//     const visited = {}
//     const adjacencylist = this.adjacencylist;
//     function helper(vertex){
//       if(!vertex){
//         return
//       }
//       result.push(vertex)
//       visited[vertex] = true

//       adjacencylist[vertex].forEach(neighbor=>{
//         if(!visited[neighbor]){
//           helper(neighbor)
//         }
//       })
//     }
//     helper(start)
//     return result
//   }

// }

// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")

// graph.addEdges("C","A")
// graph.addEdges("B","D")
// graph.addEdges("B","C")
// graph.addEdges("D","A")
// graph.addEdges("E","A")

// console.log(graph.bfs("A"));
// console.log(graph.dfs("A"));

// class Node{
//   constructor(){
//     this.children = {}
//     this.endword = false
//   }
// }

// class Trie{
//   constructor(){
//     this.root = new Node()
//   }

//   insert(word){
//     let currentNode = this.root
//     for(const char of word){
//       if(!currentNode.children[char]){
//         currentNode.children[char] = new Node()
//       }
//       currentNode = currentNode.children[char]
//     }
//     currentNode.endword = true
//   }

//   search(word){
//     let currentNode = this.root
//    for(const char of word){
//     if(!currentNode.children[char]){
//       return false
//     }
//     currentNode = currentNode.children[char]
//    }
//    return currentNode.endword
//   }

//   startwith(word){
//     let currentNode = this.root
//     for(const char of word){
//       if(!currentNode.children[char]){
//         return false
//       }
//       currentNode = currentNode.children[char]
//     }
//     return true
//   }

//   autoComplete(word){
//     let currentNode = this.root
//     for(const char of word){
//       if(!currentNode.children[char]){
//         return []
//       }
//       currentNode = currentNode.children[char]
//     }
//     let list = []
//     this.collectWords(currentNode,word,list)
//     return list
//   }

//   collectWords(node,word,list){
//     if(node.endword){
//       list.push(word)
//     }
//     for(let char in node.children){
//       this.collectWords(node.children[char], word+char, list)
//     }
//   }
// }

// const trie = new Trie()

// trie.insert("car")
// trie.insert("cars")
// trie.insert("bike")

// console.log(

//   trie.autoComplete("b")
// );

// class HashTable{
//   constructor(n){
//     this.table = new Array(n)
//   }

//   hash(key){
//     let total = 0
//     for (let i = 0; i < key.length; i++) {
//       total+=(key.charCodeAt(i))
//     }
//     return total%this.table.length
//   }

//   set(key,value){
//     const index = this.hash(key)
//     if(!this.table[index]){
//       this.table[index] = []
//     }
//     this.table[index].push([key, value])
//   }
//   get(key){
//     const index = this.hash(key)
//     return this.table[index]
//   }

//   disply(){
//     for (let i = 0; i < this.table.length; i++) {
//     if(this.table[i])
//       console.log(i,this.table[i]);
//     }
//   }

//   removeDup(arr){
//     let hashtable = {}
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//       if(!hashtable[arr[i]]){
//         hashtable[arr[i]] = true
//         result.push(arr[i])
//       }
//     }
//     return result
//   }
// }

// const table = new HashTable(10)

// table.set("vivek", 78)
// table.set("vivek", 783)
// table.set("viv234234ek", 782)

// console.log(

//   table.removeDup([1,2,2,2,2,3,4,5,6,6,6,6,6,2,4,6])
// );

// class MinHeap{
//   constructor(){
//     this.heap = []
//   }

//   getParentInd(index){
//     return Math.floor((index-1)/2)
//   }

//   getLeftChildInd(index){
//     return (index*2)+1
//   }

//   getRightChildInd(index){
//     return (index*2)+2
//   }

//   getParent(index){
//     return this.heap[this.getParentInd(index)]
//   }

//   getLeftChild(index){
//     return this.heap[this.getLeftChildInd(index)]
//   }

//   getRightChild(index){
//     return this.heap[this.getRightChildInd(index)]
//   }

//   hasParent(index){
//     return index >0
//   }

//   swap(ind1,ind2){
//     [this.heap[ind1], this.heap[ind2]] = [this.heap[ind2], this.heap[ind1]]
//   }

//   insert(value){
//     this.heap.push(value)
//     this.heapifyUp()
//   }

//   heapifyUp(){
//     let currentIndex = this.heap.length-1
//     while (this.hasParent(currentIndex) && this.heap[currentIndex]<this.getParent(currentIndex)) {
//       this.swap(currentIndex,this.getParentInd(currentIndex))
//       currentIndex = this.getParentInd(currentIndex)
//     }
//   }

//   remove(){
//     let removeVal = this.heap[0]
//     this.heap[0] = this.heap.pop()

//     const temp = [...this.heap]
//     this.heap = []
//     for(const val of temp){
//       this.insert(val)
//     }
//     return removeVal
//   }

//   sort(arr){
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//       this.insert(arr[i])
//     }
//     for (let i = 0; i < arr.length; i++) {
//       result.push(this.remove())

//     }
//     return result
//   }
// }

// const heap = new MinHeap()

// heap.insert(12)
// heap.insert(312)
// heap.insert(2)
// heap.insert(123)

// console.log(heap.sort([1,8,0,8,7,6,5,4,3,3,2,4,4,5,5,55]));

// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class LinkedList{
//   constructor(){
//     this.head = null
//   }

//   insert(value){
//     const newNode = new Node(value)
//     if(this.head ==null){
//       this.head = newNode
//     }else{
//       newNode.next = this.head
//       this.head = newNode
//     }
//   }

//   insertLast(value){
//     const newNode = new Node(value)
//     if(this.head == null){
//       this.head = newNode
//     }else{
//       let curr = this.head
//       while(curr.next){
//         curr = curr.next
//       }
//       curr.next = newNode
//     }
//   }

//   addAtk(value,position){
//     const newNode = new Node(value)
//     let current = this.head
//     for (let i = 0; i < position.length-1; i++) {
//       current = current.next
//     }
//     newNode.next = current.next
//     current.next = newNode
//   }

//   removeMid(){
//     let fast = this.head
//     let slow = this.head
//     let prev = null
//     while(fast&&fast.next){
//       fast = fast.next.next
//       prev = slow
//       slow = fast.next
//     }
//     prev.next = slow.next
//   }

//   removeDup(){
//     let current= this.root
//     let prev = null
//     const array = new Set()

//     while(current){
//       if(array.has(current.value)){
//         prev.next = current.next
//       }else{
//         array.add(current.value)
//         prev = current
//       }
//       current = current.next
//     }
//   }

//   print(){
//     let current = this.head
//     while(current){
//       console.log(current.value)
//       current = current.next

//     }
//   }
// }

// const ll = new LinkedList()

// ll.insertLast(132)
// ll.insertLast(1432)
// ll.insertLast(1322)
// ll.insertLast(1324)

// ll.print()

// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class Stack{
//   constructor(){
//     this.top = null
//     this.size = 0
//   }

//   push(value){
//     const newNode = new Node(value)
//     newNode.next = this.top
//     this.top = newNode
//     this.size++
//   }

//   pop(){
//     if(this.top === null){
//       "its empry"
//     }
//     const remove = this.top.value
//     this.top = this.top.next
//     this.size--
//     return remove
//   }

//   peek(){
//     return this.top.value
//   }

//   getSize(){
//     return this.size
//   }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.getSize());

// class Stack{
//   constructor(){
//     this.items = []
//   }

//   push(value){
//     return this.items.push(value)
//   }

//   pop(){
//     return this.items.pop()
//   }

//   reverseString(str){
//     const stack = new Stack()
//     for (let i = 0; i < str.length; i++) {
//       stack.push(str[i])
//     }
//     let string = ""
//     while (stack.items.length>0) {
//       string+=stack.pop()

//     }
//     return string
//   }
// }

// const stack = new Stack()

// stack.push(12)
// stack.push(122)
// stack.push(124)

// console.log(stack.reverseString("vivek"));

// function fibonacci(n){
//   if(n<=1){
//     return n
//   }
//   return fibonacci(n-1)+fibonacci(n-2)
// }

// console.log(fibonacci(5));

// function reverseString(str){
//     if(!str.length == 0){
//       return reverseString(str.substr(1))+(str.charAt(0))
//     }else{
//       return ""
//     }
// }
// console.log(reverseString("vivek"));

// function isPal(str,i=0,j=str.length-1){
//   if(i>j){
//     return true
//   }
//   if(str[i]!==str[j]){
//     return false
//   }else{
//     return isPal(str,i+1,j-1)
//   }
// }

// console.log(isPal("malayalam"));

// function removedup(arr){
//   const unique = []
//   for (let i = 0; i < arr.length; i++) {
//     if(!unique.includes(arr[i])){
//       unique.push(arr[i])
//     }
//   }
//   return unique
// }

// console.log(removedup([2,3,2,3,4,4,4,4,5,6,6,6,63,3,6,6]));

// function removedup(arr){
//   const array = []
//   for (let i = 0; i < arr.length; i++) {
//     let isdup = false
//     for (let j = 0; j < array.length; j++) {
//       if(arr[i]==array[j]){
//         isdup = true
//         break
//       }
//     }
//     if(!isdup){
//       array.push(arr[i])
//     }
//   }
//   return array
// }

// console.log(removedup([2,3,2,3,4,4,4,4,5,6,6,6,63,3,6,6]));

// function removedup(arr){
//   const array = []
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0
//     for (let j = 0; j < arr.length; j++) {
//       if(arr[i]==arr[j]){
//         count++
//       }

//     }
//     if(count<2){
//       array.push(arr[i])
//     }

//   }
//   return array
// }

// console.log(removedup([2,3,2,3,4,4,4,4,5,6,6,6,63,3,6,6]));//[5,63]

// function sum(arr){
//   if(arr.length==0){
//     return 0
//   }
//   return arr[0]+sum(arr.slice(1))
// }

// console.log(sum([2,3,4,5,6]));

// function sumPrime(arr){
//   if(arr.length<1){
//     return 0
//   }
//   if(isPrime(arr[0])){
//     return arr[0]+sumPrime(arr.slice(1))
//   }
//   return sumPrime(arr.slice(1))
// }

// console.log(sumPrime([1,2,3,4,5]));

// function isPrime(num){
//   let count = 0
//   for (let i = 1; i <= num; i++) {
//     if(num%i==0){
//       count++
//     }
//   }
//   if(count==2){
//     return true
//   }
// }

// const str = "1234566667777777889666"

// function long(str){
//   let longString = ""
//   let secondLong = ""
//   for (let i = 0; i < str.length; i++) {
//     let count = 0
//     let string = ""
//     while(str[i]==str[i+1]){
//       count++
//       string+=str[i]
//       console.log(string);
//       i++
//     }
//     if(longString.length<count){
//       secondLong = longString
//       longString = string+str[i]
//     }

//   }
//   return secondLong
// }
// console.log(long(str));

// const val = 20
// const obj = {name:"vivek"}
// function fun(){
//   console.log(this.name);

// }
// fun.call(obj)

// const arr1 = [23,31,3,51,67,51]
// const found = arr1.find(a=>a%2==0)
// console.log(found);

// heap sort

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

// function sum(n){
//   if(n<=1){
//     return n%2==0
//   }

//   if(n%2==0){
//     return n+sum(n-1)
//   }
//   return sum(n-1)
// }

// console.log(sum(5));

// function* generator(){
//   let num = 100
//   while(num>0){
//   if(num%5==0){
//     yield num
//   }
//   num--

//   }
// }

// const gen = generator()
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// function fun(arr,i=0){
//   if(arr.length==i){
//     return 0
//   }
//   return (arr[i]%2==0?arr[i]:0)+fun(arr,i+1)
// }
// console.log(fun([1,4,3,2]));

// function fun(arr){
//   if(arr.length==0){
//     return 0
//   }
//   return arr[0]+fun(arr.slice(1))
// }
// console.log(fun([2,3,4,5,4]));

// alt+]
// alt+[
// up,down
// ctrl+I
// ctrl+shift+A
// alt+ctrl+i

//     const arr = [39, 234, 4, 1];

//     function sum(arr,index){
//       if(index < 0){
//         return 0;
//       }
//       return sum(arr, index-1) + arr[index];
//     }

//  console.log(sum(arr,arr.length-1))

// function fun(arr,i=0){
//   if(arr.length==i){
//     return 0
//   }
//   return (arr[i])+fun(arr,i+1)
// }
// console.log(fun([1,4,3,2]));

// function fun(str) {
//   let result = 0;
//   let count = 0;
//   for (let i = 0; i < str.length-1; i++) {
//      if(str[i] !== str[i+1]){
//         if(count!=0 && count > result){
//             result = count;
//         }
//         count = 0;
//      }
//      count++;
//   }
//   return result;
// }

// console.log(fun("wwweteterrwttttttttyyyy"));

// const arr = [2, 4, 6, 7, 2, 9 , 3, 4];
// const res = [];
// for(let i =0;i<arr.length;i++){
//     if(arr[i] != -1){
//         res.push(arr[i]);
//     }
//     for(let j = 0;j<arr.length;j++){
//         if(i!=j && arr[i] == arr[j]){
//            arr[j] = -1;
//         }
//     }
// }

// console.log(res)

// const arr = ["abc", "dsfds", "sfd", "abc", "dsfsd", "df" , "xvd", "df"];

// const map = new Map();

// for(let i = 0;i<arr.length;i++){
//    map.set(arr[i],
//      map.has(arr[i]) ? map.get(arr[i]) + 1 : 1);
// }

// console.log(map);

// const arr = [1,2,3,4,3,4,5,6,6,6,7,8,9]
// const ans = {}
// for (let i = 0; i < arr.length; i++) {
//   const num = arr[i]
//  ans[num]?ans[num]++:ans[num] =1
// //  if(ans[num]){
// //   ans[num]++
// //  }else{
// //   ans[num] = 1
// //  }

// }
// console.log(ans);

// const array = [1,2,3,4,3,4,5,6,6,6,7,8,9]
// const answer = array.reduce((acc,curr)=>{
//   acc[curr] = (acc[curr] ||0)+1
//   return acc
// },{})

// console.log(answer);

// function even(num){
//   if(num%2==0){
//     return true
//   }else{
//     return false
//   }
// }

// function sum(arr,i=0){
//   if(arr.length<=i){
//     return 0
//   }
//   if(even(arr[i])){
//     return arr[i]+sum(arr,i+1)
//   }else{
//     return sum(arr,i+1)
//   }
// }

// console.log(sum([2,3,4,5]));

// function even(num){
//   if(num%2==0){
//     return true
//   }else{
//     return false
//   }
// }

// function sum(arr,i=0){
//   if(i>=arr.length){
//     return 0
//   }
//   if(even(arr[i])){
//     return arr[i]+sum(arr.slice(1))
//   }else{
//     return sum(arr.slice(1))
//   }
// }

// console.log(sum([2,3,4,5,6,6]));

// function check(num){
//   if(typeof num == "number"){
//     return num
//   }else if(typeof num == "string"){
//       return parseInt(num)
//   }else if(typeof num == "object"){
//     let sum = 0
//    for (const val in num) {
//     sum+=num[val]
//    }
//    return sum
//   }
// }

// function sum(arr,i=0){
//   if(arr.length<=i){
//     return 0
//   }
//     return check(arr[i])+sum(arr,i+1)
// }
// console.log(sum([2,3,4,{a:3,b:4}]));

// const arr = [
//     {
//       a: 3,
//       adf: { l: [3, 23, 423, 5] },
//     },
//     {
//       a: 3,
//       adf: { l: [3, 23, 423, 5] }
//     },
//     {
//       a: 3,
//       adf: { l: [3, 23, 423, 5] }
//     },
//   ];

// function sum(arr){
//   let total = 0
//   arr.forEach(x => {
//     total+=x.a
//     total+=x.adf.l.reduce((acc,curr)=>acc+curr)
//   });
//   return total
// }

// console.log(sum(arr));

// const arr = [
//     {
//       a: 3,
//       adf: { l: [3, 23, 423, 5] },
//     },
//     {
//       a: 3,
//       adf: { l: [3, 23, 423, 5] }
//     },
//     {
//       a: 3,
//       adf: { l: [3, 23, 423, 5] }
//     },
//   ];

//   function check(num){
//     let sum = 0
//       sum+=num.a
//       sum+=num.adf.l.reduce((acc,curr)=>acc+curr,0)
//       return sum
//   }

//   function sum(arr,i=0){
//     if(arr.length<=i){
//       return 0
//     }
//     return check(arr[i])+sum(arr,i+1)
//   }
//   console.log(sum(arr));

// const today = new Date()

// const tomorrow = new Date(today)
// tomorrow.setDate(today.getDate()+1)
// console.log(tomorrow.getDate());

// const start = new Date("2023-06-12")
// const end = new Date("2024-06-12")

// const diff = end-start
// console.log(diff/ (1000 * 60 * 60 * 24));

// function binarySearch(arr,target){
//   let start = 0
//   let end = arr.length-1
//   while(start<=end){
//     const mid = Math.floor((start+end)/2)
//     if(arr[mid]==target){
//       return true
//     }else if(target > arr[mid]){
//       start = mid+1
//     }else{
//       end = mid-1
//     }

//   }
//   return false
// }

// console.log(binarySearch([2,3,4,6,7,9,12,34,56,67],56));

// function binaryRec(arr,target, start = 0, end = arr.length-1){
//   if(start>end){
//     return false
//   }
//   let mid = Math.floor((start+end)/2)
//   if(arr[mid]==target){
//     return true
//   }else if(arr[mid]<target){
//     return binaryRec(arr,target,start=mid+1, end)
//   }else{
//     return binaryRec
//     (arr,target,start,end=mid-1)
//   }
// }
// console.log(binaryRec([2,3,4,6,7,9,12,34,56,67],8));

// function quick (arr){
//   if(arr.length<=1)
//     return arr

//   let pivot = arr[0]
//   let left = []
//   let right = []

//   for (let i = 1; i < arr.length; i++) {
//     if(arr[i]<pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...quick(left),pivot,...quick(right)]

// }

// console.log(quick([1,3,4,5,6,7,3,]));

// function mergeSort(arr){
//   if(arr.length<=1){
//     return arr
//   }
//   let mid = Math.floor(arr.length/2)
//   let left = arr.slice(0,mid)
//   let right = arr.slice(mid)
//   return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//   let result = []
//   while(left.length&&right.length){
//     if(left[0]<=right[0]){
//       result.push(left.shift())
//     }else{
//       result.push(right.shift())
//     }
//   }
//   return [...result,...left,...right]
// }
// console.log(mergeSort([1,3,4,5,6,7,3,]));

// function selection(arr){
// for (let i = 0; i < arr.length; i++) {
//   let lowest = i
//   console.log(lowest);

//   for (let j = i+1; j < arr.length; j++) {
//     if(arr[j]<arr[lowest]){
//       lowest = j
//     }
//   }
//   if(i!==lowest){
//     [arr[i],arr[lowest]] = [arr[lowest],arr[i]]
//   }

// }
// return arr
// }

// console.log(selection([2,4,3,4,6,678,78,57,43,35,32]));

// function insertion(arr){
//   for (let i = 0; i < arr.length; i++) {
//       for (let j = i; j >=0; j--) {
//           if(arr[i]<arr[j-1]){
//             [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
//           }
//       }
//   }
//   return arr
// }
// console.log(insertion([2,4,3,4,6,678,78,57,43,35,32]));

// function bubble(arr){
//   for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//           if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//           }
//       }
//   }
//   return arr
// }
// console.log(bubble([2,4,3,4,6,678,78,57,43,35,32]));

// class Node{
//   constructor(value){
//     this.value = value
//     this.left = null
//     this.right = null
//   }
// }

// class BST{
//   constructor(){
//     this.toot = null
//   }

//   insert(value){
//     const newNode = new Node(value)
//     if(this.root == null){
//       this.root = newNode
//     }else{
//       this.insertNode(this.root,newNode)
//     }
//   }

//   insertNode(root,node){
//     if(root.value>node.value){
//       if(root.left == null){
//         root.left = node
//       }else{
//         return this.insertNode(root.left, node)
//       }
//     }else{
//       if(root.right === null){
//         root.right = node
//     }else{
//       return this.insertNode(root.right, node)
//     }
//     }
//   }

//   inOrder(root){
//     if(root){
//       this.inOrder(root.left)
//       console.log(root.value);
//       this.inOrder(root.right)
//     }
//   }

//   min(root = this.root){
//     if(!root.left){
//       return root.value
//     }else{
//       return this.min(root.left)
//     }
//   }

//   levelOrder(){
//     let arr = []
//     arr.push(this.root)
//     while(arr.length){
//       let current = arr.shift()
//       console.log(current.value);
//       if(current.left){
//         arr.push(current.left)
//       }
//       if(current.right){
//         arr.push(current.right)
//       }
//     }
//     return arr
//   }

//   large(){
//     let result = []
//     this.helper(this.root,result)
//     return result[0]
//   }

//   helper(root,arr){
//     if(root == null){
//       return arr
//     }
//      this.helper(root.left,arr)
//     arr.push(root.value)
//     this.helper(root.right,arr)

//   }

//   height(root){
//     if(!root){
//       return 1
//     }
//     let left = this.height(root.left)
//     let right = this.height(root.right)
//     return Math.max(left,right)+1
//   }

//   search(root,val){
//     if(!root){
//       false
//     }else{
//       if(root.value==val){
//         return true
//       }else if(root.value>val){
//         return this.search(root.left,val)
//       }else{
//         return this.search(root.right, val)
//       }
//     }
//     return false
//   }

// }

// const bst = new BST()
// bst.insert(142)
// bst.insert(15)
// bst.insert(11)
// bst.insert(145)
// bst.insert(151)
// bst.insert(175)
// bst.insert(111)

// bst.inOrder(bst.root)
// console.log(bst.min(bst.root));
// bst.levelOrder()
// console.log(bst.large());
// console.log(bst.height(bst.root));
// console.log(bst.search(bst.root,1555));

// const str = "I am vivek"

// const arr = []
// for (let i = 0; i < str.length; i++) {
//   let string = ""
//   while(i<str.length&&str[i]!==" "){
//     string +=str[i]
//     i++
//   }
//   if (string.length > 0) {
//     arr.push(string);
//   }
// }
// const ans = arr.reduce((acc,curr)=>{
//   if(acc.length>curr){
//     return acc
//   }else{
//     return curr
//   }
// })

// console.log(ans);

// const str = "I am vivek";
// function long(str){
//   const arr = []
//   for (let i = 0; i < str.length; i++) {
//     let string = ""
//     while(i<str.length && str[i]!==" "){
//       string+=str[i]
//       i++
//     }
//     if(string.length>0){
//       arr.push(string)
//     }
//   }
//   const ans = arr.reduce((acc,curr)=>{
//     if(acc.length>curr.length){
//       return acc
//   }else{
//     return curr
//   }
//   })
//   return ans
// }

// console.log(long(str));

// const str = "    hii how are you   "
// const ans = str.replaceAll(" ",3)
// console.log(ans);

// class Stack{
//   constructor(){
//     this.items = []
//   }

//   push(value){
//     this.items.push(value)
//   }

//   pop(){
//     return this.items.pop()
//   }

//   reverse(str){
//     const stack = new Stack()
//     for (let i = 0; i < str.length; i++) {
//       stack.push(str[i])
//     }
//     let string = ""
//     while(stack.items.length>0){
//       string+=stack.pop()
//     }
//     return string
//   }

// }

// const stack = new Stack()

// stack.push(12)
// stack.push(122)
// stack.push(124)

// console.log(stack.reverse("vivek"));

// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// console.log({} + {});
// // =============================================
// var a = 1;
// var b = a++;
// console.log(a, b);
// // ============================================
// console.log(0.1 + 0.2 === 0.3);
// // ============================================
// var x = 10;
// function test() {
//     var x = 20;
//   return function() {
//     return x;
//   };
// }
// var inner = test();
// console.log(inner());
// // ============================================
// var foo = (function() {
//     var counter = 0;
//     return function() {
//       counter++;
//       return counter;
//     };
//   })();
//   console.log(foo());
//   console.log(foo());
//   console.log(foo());
// // ============================================
// var obj = { a: 1, b: 2 };
// var clone = obj;
// clone.a = 3;
// console.log(obj.a);
// // ============================================
// let i = 0;
// const id = setInterval(function() {
//   console.log(i++);
//   if (i === 3) {
//     clearInterval(id);
//   }
// }, 1000);
// // ============================================
// console.log(typeof NaN);
// // ============================================
// const obj = { a: 1 };
// Object.freeze(obj);
// obj.a = 2;    //TypeError:
// console.log(obj.a);
// // ============================================
// let a = [1, 2];
// let b = [1, 2];
// console.log(a == b);
// console.log(a === b);
// // ============================================
// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log("A" - "B" + "2");
// // ============================================
// function foo() {
//     return {
//       bar: "hello"
//     };
//   }
//   function foo2() {
//     return
//     {
//         bar: "hello"
//     };
//   }
//   console.log(foo());
//   console.log(foo2());
// // ============================================
// const sym = Symbol("uniqueKey");
// const obj = {
//   [sym]: "value",
//   id: 42
// };
// // ============================================
// console.log(obj[sym]); // value
// console.log(obj.id);   // 42
// // ============================================
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers.length);
// console.log(numbers[6]);
// // ============================================
// console.log({} == {});
// console.log([] == []);
// // ============================================
// const foo = () => console.log(this);
// foo();
// // ===============================================
// console.log(false == '0');
// console.log(false === '0');
// // ===============================================
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof {});
// // ===============================================
// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);
// // ===============================================
// (function() {
//   var a = b = 5;
// })();
// console.log(b);
// // ===============================================
// const person = {
//   name: "John",
//   sayHi: () => {
//     console.log(`Hi, I'm ${this.name}`);
//   }
// };
// person.sayHi();
// // ===============================================
// console.log([..."hello"]);
// console.log(..."hello");
// console.log({..."hello"});
// // ===============================================

// class Node{
//     constructor(){
//         this.children = {}
//         this.endWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let currentNode = this.root
//         for (const char of word) {
//             if(!currentNode.children[char]){
//                 currentNode.children[char] =  new Node()
//             }
//             currentNode = currentNode.children[char]
//         }
//         currentNode.endWord = true
//     }

//     search(word){
//         let currentNode = this.root
//         for (const char of word) {
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return currentNode.endWord
//     }

//     startWith(word){
//         let currentNode =this.root
//         for(const char of word){
//             if(!currentNode.children[char]){
//                 return []
//             }
//             currentNode = currentNode.children[char]
//         }
//         return true
//     }
//     autoComplete(word){
//         let currentNode = this.root
//         for(const char of word){
//             if(!currentNode.children[char]){
//                 return []
//             }
//             currentNode = currentNode.children[char]
//         }
//         let list = []
//         this.collectWord(currentNode, word, list)
//         return list
//     }

//     collectWord(node,word,list){
//         if(node.endWord){
//             list.push(word)
//         }
//         for(let char in node.children){
//             this.collectWord(node.children[char],word+char,list)
//         }
//     }

//     longestPrefix() {
//         let currentNode = this.root
//         let answer = ""
//         while(currentNode){
//             const keys = Object.keys(currentNode.children)
//             if(keys.length===1&&!currentNode.endWord){
//                 answer+=keys[0]
//                 currentNode = currentNode.children[keys[0]]
//             }else{
//                  break
//             }
//         }
//         return answer
//     }

// }

// const trie = new Trie()
// // trie.insert("bike")
// trie.insert("car")
// trie.insert("cars")
// trie.insert("carss")
// trie.insert("carssr")

// console.log(trie.startWith("vi"));
// console.log(trie.search("vivek"));
// console.log(trie.autoComplete("c"));
// console.log(trie.longestPrefix())

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = []
//         }
//     }

//     addEdges(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)
//     }

//     // bfs(start){
//     //     const result = []
//     //     const queue = [start]
//     //     const visited = {}
//     //     visited[start] = true

//     //     while(queue.length){
//     //         let vertex = queue.shift()
//     //         result.push(vertex)
//     //         this.adjacencyList[vertex].forEach(element => {
//     //             if(!visited[element]){
//     //                 queue.push(element)
//     //                 visited[element] = true
//     //             }
//     //         });
//     //     }
//     //     return result
//     // }

//     // dfs(start){
//     //     const result = []
//     //     const visited = {}
//     //     const adjacencyList = this.adjacencyList;

//     //     function helper(vertex){
//     //         if(!vertex) return
//     //         result.push(vertex)
//     //         visited[vertex] = true

//     //         adjacencyList[vertex].forEach(element => {
//     //             if(!visited[element]){
//     //                 helper(element)
//     //             }
//     //         });
//     //     }
//     //     helper(start)
//     //     return result
//     // }

//     countCycles() {
//         const visited = {};
//         let cycleCount = 0;

//         const dfs = (vertex, parent) => {
//             visited[vertex] = true;

//             this.adjacencyList[vertex].forEach(neighbor => {
//                 if (!visited[neighbor]) {
//                     // Visit unvisited neighbor
//                     dfs(neighbor, vertex);
//                 } else if (neighbor !== parent) {
//                     // If visited and not the parent, it's a cycle
//                     cycleCount++;
//                 }
//             });
//         };

//         // Call DFS for all unvisited nodes to account for disconnected graphs
//         for (let vertex in this.adjacencyList) {
//             if (!visited[vertex]) {
//                 dfs(vertex, null);
//             }
//         }

//         // Each cycle is counted twice, so divide by 2
//         return cycleCount / 2;
//     }
// }

// const graph = new Graph()

// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("F");
// graph.addVertex("E");

// graph.addEdges("A", "C");
// graph.addEdges("A", "D");
// graph.addEdges("F", "D");
// graph.addEdges("C", "E");
// graph.addEdges("B", "F");
// graph.addEdges("B", "E");
// graph.addEdges("C", "D");

// // console.log(graph.bfs("A"));
// // console.log(graph.dfs("F"));
// console.log("Cycle Count:", graph.countCycles());

// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//     }

//     hash(key){
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total+=(key.charCodeAt(i))
//         }
//         return total%this.table.length
//     }

//     set(key,value){
//         const index = this.hash(key)
//         if (!this.table[index]) {
//             this.table[index] = []
//         }
//         this.table[index].push([key,value])
//     }

//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }

//     delete(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     print(){
//         for (let i = 0; i < this.table.length; i++) {
//             if(this.table[i]){
//                 console.log(this.table[i]);

//             }

//         }
//     }

//     removDup(arr){
//         let hashtabl = {}
//         let result = []
//         for (let i = 0; i < arr.length; i++) {
//             if(!hashtabl[arr[i]]){
//                 result.push(arr[i])
//                 hashtabl[arr[i]] = true
//             }

//         }
//         return result
//     }
// }

// const table = new HashTable(10)

// table.set("vivek",123)
// table.set("viv543ek",1236)
// table.set("viv8765ek",1235)
// table.set("viv8765ek",12355)

// console.log(

//     table.removDup([1,2,3,2,2,3,4,5,6,4,4,3,2,1,2,45,7,6,7,87,87])
// );

// const arr = [1,1,2,3,3,3,4,5,6,3,3,4,6]
// const arr2=[]
// for (let i = 0; i < arr.length; i++) {
//     let a = false
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[i]==arr2[j]){
//             a = true
//             break
//         }
//     }
//     if(!a){
//         arr2.push(arr[i])
//     }

// }

// console.log(arr2);

// const arr = [31,1,2,3,3,3,4,5,6,3,3,4,6]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//        if(arr[i]==arr[j]){
//         arr.splice(j,1)
//         j--
//        }

//     }
// }
// console.log(arr);

// const arr = [31,1,2,3,3,3,4,5,2,6,3,3,4,6]
// const ar = []
// for (let i = 0; i < arr.length; i++) {
//     let count = 0
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[i]==arr[j]){
//             count++
//         }
//     }
//     if(count<2){
//         ar.push(arr[i])
//     }

// }

// console.log(ar);

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
// console.log(arr)
// heapSort(arr)
// console.log(arr)

// function fun(a,i=0){
//     if(i>a){
//         return
//     }

//     fun(a,i+1)
//     console.log(i);
// }

// fun(10);

// function fun(str,i=0,j=str.length-1){
//     if(i>j){
//         return true
//     }
//     if(str[i]!==str[j]){
//         return false
//     }else{
//         return fun(str,i+1,j-1)
//     }
// }

// console.log(fun("malayaam"));

// function fun(arr,i=0){
//     if(arr.length<=i){
//         return arr
//     }
//     if(arr[i]%2==0){
//         // console.log(arr[i]);

//     }
//     return fun(arr,i+1)

// }

// fun([2,1,5,7,8,5,4,4])

// const arr = [2,1,3,6,7,112,11,15,13,14]

// function check(num){
//     let count = 0
//     for (let i = 0; i <= num; i++) {
//         if(num%i==0){
//             count++
//         }

//     }
//     if(count==2){
//         return num
//     }else{
//         return false
//     }
// }

// function fun(arr,i=0) {
//     if(arr.length<=i){
//         return 0
//     }
//     if(check(arr[i])){

//         return arr[i]+fun(arr,i+1)
//     }else{
//         return fun(arr,i+1)
//     }
// }

// console.log(fun(arr));

// const arr = [1,1,2,3,3,4,3,6]
// const array = []
// for (let i = 0; i < arr.length; i++) {
//     let count = 0
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[i]==arr[j]){
//             count++
//         }
//     }
//     if(count<2){
// array.push(arr[i])
//     }

// }

// console.log(array);

// const obj = {
//     a:10,
//     b:12,
//     c:5
// }
// function fun(){

//     let max = 0
//     let lkey = ""
//     for (const key in obj) {
//         if(obj[key]>max){
//             max = obj[key]
//             lkey = key
//         }
//     }
//     return lkey
// }

// console.log(fun());

// function fun(arr,callback){
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]))

//     }
//     return result
// }

// const nums = [3,2,4,5,1,6]
// function callback(num){
//     return num*2
// }
// console.log(fun(nums,callback));

// const array=[25,1,2,3,4,5,26,27]
// let max = 0
// const result=array.reduce((acc,curr)=>{
//     if(curr%2!==0){
//         if(curr>acc){
//             return curr
//         }else{
//             return acc
//         }
//     }
//     return acc
// },0)
// console.log(result)

// const array=[2,25,1,2,3,4,5,26,4]
// const result = array.reduce((acc, curr)=>{
//     if(curr%2==1){

//         return acc>curr?acc:curr
//     }
//     return acc
// },1)

// console.log(result);

// const arr = [3,4,2,5,5,7,7,8]
// const array = []
// function fun(arr, callback){
//     for (let i = 0; i < arr.length; i++) {
//        array.push(callback(arr[i]))
//     }
//     return array
// }

// function add(num){
//     return num*2
// }

// console.log(fun(arr,add));

// const obj = {
//     a:2,
//     b:4,
//     c:1,
// }

// const keys = Object.keys(obj)

// delete obj[keys[0]]
// console.log(obj);

// function fun(obj){
//     let max = 0
//     let ans = ""
//     for (const key in obj) {
//         if (obj[key]>max) {
//             max = obj[key]
//             ans = key
//         }
//     }
//     return ans
// }

// const obj = {
//     a:4,
//     b:34,
//     c:7
// }

// console.log(fun(obj));

// const arr = [3,3,3,4,3,1,1,1,1,1,1,1,1,1,1,1,1]
// function fun(arr){
//     let hashtable = {}
//     for (let i = 0; i < arr.length; i++) {
//         if(!hashtable[arr[i]]){
//             hashtable[arr[i]]=1
//         }else{
//             hashtable[arr[i]]+=1
//         }

//     }
//     return hashtable
// }
// console.log(fun(arr));

// const arr = [3,34,6,7,5,4,4,3,2,35,7,8]
// function fun(arr) {
//     let sett = {}
//     for (let i = 0; i < arr.length; i++) {
//        sett[arr[i]] = (sett[arr[i]]||0)+1
//     }
//     const result = []
//     for (const key in sett) {
//        if(sett[key]==1){
//         result.push(key)
//        }
//     }
//     return result
// }

// console.log(fun(arr));

// const arr = [3,34,6,7,5,4,4,3,2,35,7,8]
// function fun(arr){
// const result = []
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i]==arr[j]){
//                 count++
//             }
//         }
//         if(count<2){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(fun(arr));

// function fun(str){
//     const stack = []
//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i])
//     }
//     console.log(stack);

//     let result = ""
//     while(stack.length>0){
//         result+=stack.pop()
//     }
//     return result
// }
// console.log(fun("vivek"));

// const arr = [3,34,6,7,5,4,4,3,2,35,7,8]
// function fun(arr) {
//     let sett = {}
//     for (let i = 0; i < arr.length; i++) {
//        sett[arr[i]] = (sett[arr[i]]||0)+1
//     }
//     const result = []
//     for (const key in sett) {
//        if(sett[key]==1){
//         result.push(key)
//        }
//     }
//     return result
// }

// console.log(fun(arr));

// function fun(str){
//     if(str.length<=1){
//         return str
//     }
//     return fun(str.substr(1))+str.charAt(0)
// }

// console.log( fun("vivek"));

// function Person(name){
//     this.name = name
// }

// Person.prototype.sayHi = function (){
//     console.log(`hi ${this.name}`);

// }

// const person = new Person("vivek")
// person.sayHi()
// const person1 = new Person("vivek1")
// person.sayHi()

// class Person{
//     constructor(name){
//         this.name = name
//     }

//     sayHello(){
//         console.log(`hello ${this.name}`);

//     }
// }

// const person = new Person("vivek")

// person.sayHello()

// const obj = {name:"vivek"}

// Reflect.set(obj,"email","@gmail.com")

// console.log(

//     Reflect.get(obj,"email")
// );
// console.log(obj);

// import express from "express"
// const app = express()

// app.get("/add",(req,res)=>{
//     const num1 = parseInt(req.query.num1)
//     const num2 = parseInt(req.query.num2)
//     const sum =  num1+num2
//     res.json(sum)
// })

// const port = 3000
// app.listen(port,()=>{
//     console.log("http://localhost:3000");

// })

// function firstcb(){
//     return new Promise((resolve)=>{

//         setTimeout(()=>{
//             console.log("callback one");
//             resolve()
//         },200)
//     })
// }
// function secondcb(){
//     return new Promise((resolve)=>{

//     setTimeout(()=>{
//         console.log("callback two");
//         resolve()
//     },100)
// })
// }
// function thirdcb(){
//     return new Promise((resolve)=>{

//     setTimeout(()=>{
//         console.log("callback three");
//         resolve()
//     },300)
// })
// }

// firstcb(()=>{
//     secondcb(()=>{
//         thirdcb(()=>{
//             console.log("all completed");// callback hell

//         })
//     })
// })

// async/await
// async function execute(){
//     await firstcb()
//     await secondcb()
//     await thirdcb()
//     console.log("all completed");
// }
// execute()

// Promise
// firstcb().then(secondcb).then(thirdcb).then(()=>{
//     console.log("all completed");

// }).catch((err)=>{
//     console.log(err);

// })

// const cluster = require('cluster');
// const http = require('http');
// const os = require('os');
// const express = require('express');

// // Fibonacci function (blocking task)
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// const app = express();

// // Define the route to calculate Fibonacci number
// app.get('/fibonacci', (req, res) => {
//   const n = parseInt(req.query.n, 10);

//   if (isNaN(n) || n < 0) {
//     return res.status(400).send('Invalid number');
//   }

//   // Perform the blocking Fibonacci calculation
//   const result = fibonacci(n);
//   res.send(`Fibonacci of ${n} is ${result}`);
// });

// // Set up clustering: master process controls the worker processes
// if (cluster.isMaster) {
//   const numCPUs = os.cpus().length; // Get the number of CPU cores

//   // Fork workers
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork(); // Spawn worker
//   }

//   // Handle worker deaths
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died`);
//   });

// } else {
//   // Worker processes will run the Express server
//   http.createServer(app).listen(3000, () => {
//     console.log(`Worker ${process.pid} started`);
//   });
// }

// const { Worker } = require('worker_threads');

// const worker = new Worker('./worker.js', {
//   workerData: { task: 'Calculate factorial', number: 50 }, // Passing data to the worker
// });

// worker.on('message', (result) => {
//   console.log('Result from worker:', result);
// });

// worker.on('error', (error) => {
//   console.error('Error from worker:', error);
// });

// worker.on('exit', (code) => {
//   if (code !== 0) {
//     console.error(`Worker stopped with exit code ${code}`);
//   }
// });



// factory function
// function fun(name, email) {
//   return {
//     name,
//     email,
//     greet() {
//       return console.log(name, email);
//     },
//   };
// }
// const ans = fun("vivek", "email.com");

// ans.greet();



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
//         if(this.top === null){
//             this.top = newNode
//         }else{
//             newNode.next = this.top
//             this.top = newNode
//             this.size++
//         }
//     }
    
//     pop(){
//         const removed = this.top
//         this.top = this.top.next
//         this.size--
//         return removed

//     }

//     print(){
//         let current = this.top
//         while(current){
//             console.log(current.value);
//             current = current.next
//         }
//     }

//     peek(){
//         console.log((this.top.value));
         
//     }
// }


// const stack = new Stack()
// stack.push(12)
// stack.push(122)
// stack.push(112)
// stack.push(13)

// stack.print()
// stack.peek()


// heap sort 

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
// console.log(arr)
// heapSort(arr)
// console.log(arr)

// console.log(Math.floor(arr.length/2)-1);


// const arr = [123,543,567,789]
// function reverse(arr){
//     const result = []
//     for (let i = arr.length-1; i>=0; i--) {
//         let num = arr[i]
//         let reverseNum = 0
//         while(num>0){
//             let remainder = num%10
//             reverseNum = (reverseNum*10)+remainder
//             num = Math.floor(num/10)
//         }
//         result.push(reverseNum)
//     }
//     return result
// }

// console.log(reverse(arr));


// const http = require("http")
// const app = http.createServer((req,res)=>{
//     res.write("hii")
//     res.end()
// })
// app.listen(3000,()=>{
//     console.log("http://localhost:3000");
    
// })

// const express = require("express")
// const app = express()

// app.get("/",(req,res)=>{
//     res.send("hiiiiii")
// })


// app.listen(3000,()=>{
//     console.log("http://localhost:3000");
    
// })


// const fs = require("fs")

// fs.unlink("test1.txt",()=>{

//         console.log("data");
        
// })


// function fun(a){//hof
//     a()
// }
// function fun1(){
//     console.log("hii");//callback
    
// }

// fun(fun1)


// function customMap(arr,callback){ 
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]))
        
//     }
//     return result
// }

// function callback(num){
//     return num+2
// }

// console.log(customMap([2,4,3,2,3,5,6,7],callback));



// const express = require("express")
// const app = express()

// const Router = express.Router()

// app.use("/welcome",(req,res)=>{//application level
//     res.send("welcome")
// })

// Router.get("/profile",(req,res)=>{//router level
//     res.send("profilepage")
    
// })

// app.get("/error",(req,res)=>{//make error
//     throw new Error("got an error")
// })

// app.use((err,req,res,next)=>{//error handlink 
//     res.status(500).send("server error")
// })

// app.use("/users",Router)//application level

// app.listen(3000,()=>{
//     console.log("http://localhost:3000");
    
// })


// const promise = new Promise((resolve,reject)=>{
//     resolve(5)
// })

// promise.then(result=>{
//     console.log(result);
//     return result*2
    
// }).then(result=>{
//     console.log(result);
    
    
// }).catch(error=>{
//     console.log(error);
    
// })



// const os = require("os")

// console.log(os.networkInterfaces());



// function fun1(a){
//     console.log("fiun1");
//     a()
// }
// function fun2(a){
//     console.log("fiun2");
//     a()
// }
// function fun3(){
//     console.log("fiun3");
    
// }
// function fun4(){
//     console.log("fiun4");
    
// }


// fun1(()=>{
//     fun2(()=>{
//         fun3(()=>{
//             fun4(()=>{
//                 console.log("end");
                
//             })
//         })
//     })
// })

// ===========================================
// function fun1(a){
//     return function fun2(b){
//         return function fun3(c){
//             return a+b+c
//         }
//     }
// }

// console.log(fun1(2)(3)(4));


// ==============================================
// const a = {}
// const b = {name:"vivek"}
// const c = {name: "varun"}

// a[b] ={name:"aswin"}

// a[c] = {name: "fazal"}

// console.log(a[b]);



// ===========================================
// function array(b,c,...a){
//     console.log(a);   
// }
// array(1,2,3,4,5,6,7)


// =========================================
// const array = [12,34,54,56,67,8,2,5,5,7]
// console.log(delete array)
// console.log(array);



// =========================================
// const data = {name:"vivek"}
// console.log(delete data.name);
// console.log(data);


// ===========================================
// const a = {}   //[]
// const b = {}   //[]
// console.log(a==b); //false b/c checks reference


// =============================================
// const array = [12,34,54,56,67,8,2,5,5,7]// destructure
// let [q,w,e,r,t,y,u,i,o,p] =  array
// console.log(p);

// ================================================
// let a = false || {} || null ||true || 100 || undefined || "vivek" || NaN
// console.log(a);🤯

// ============================================================

// console.log(y);
// console.log(x);
// var x=y=10




// let globalVar = "global";

// function outerFunction() {
//   let outerVar = "outer";

//   function innerFunction() {
//     let innerVar = "inner";

//     console.log(innerVar);    // Found in innerFunction
//     console.log(outerVar);    // Found in outerFunction
//     console.log(globalVar);   // Found in global scope
//   }

//   innerFunction();
// }

// outerFunction();

