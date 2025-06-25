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

// // ===============23-12==========================================================================
// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.root == null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left === null){
//                 root.left = node
//             }else{
//                 return this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = node
//             }else{
//                 return this.insertNode(root.right, node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value == value){
//                 return true
//             }else if(root.value>value){
//                 return this.search(root.left, value)
//             }else{
//                 return this.search(root.right, value)
//             }
//         }
//     }

//     min(root = this.root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }

//     secondLarge(){
//         let arr = []
//         this.helper(this.root, arr)
//         return arr[1]
//     }

//     helper(root, arr){
//         if(root==null){
//             return arr
//         }
//         this.helper(root.right, arr)
//         arr.push(root.value)
//         this.helper(root.left, arr)
//     }

//     levelOrder(){
//         let arr = []
//         arr.push(this.root)
//         while(arr.length){
//             let curr = arr.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 arr.push(curr.left)
//             }
//             if(curr.right){
//                 arr.push(curr.right)
//             }
//         }
//     }
// }

// const bst = new BST()

// bst.insert(1542)
// bst.insert(15)
// bst.insert(132)
// bst.insert(4)

// // console.log(bst.search(bst.root,1542));
// // console.log(bst.min());
// // bst.inOrder(bst.root)
// // console.log(

// //     bst.secondLarge()
// // );

// bst.levelOrder()

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = []
//         }
//     }

//     addEdges(vertex1, vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)
//     }

//     bfs(start){
//         const queue = [start]
//         const result = []
//         const visited = {}
//         visited[start] = true

//         while(queue.length){
//             let vertex = queue.shift()
//             result.push(vertex)

//             this.adjacencyList[vertex].forEach(element=>{
//                 if(!visited[element]){
//                     visited[element] = true
//                     queue.push(element)
//                 }
//             })
//         }
//         return result
//     }

//     dfs(start){
//         const result = []
//         const visited = {}
//         const adjacencyList = this.adjacencyList;

//         function helper(vertex){
//             if(!vertex) return
//             result.push(vertex)
//             visited[vertex] = true

//             adjacencyList[vertex].forEach(element=>{
//                 if(!visited[element]){
//                     helper(element)
//                 }
//             })
//         }
//         helper(start)
//         return result
//     }
// }

// const graph = new Graph()

// graph.addVertex("A")
// graph.addVertex("C")
// graph.addVertex("B")
// graph.addVertex("D")

// graph.addEdges("A","D")
// graph.addEdges("B","C")
// graph.addEdges("C","A")
// graph.addEdges("B","D")
// // console.log(graph.bfs("D"));
// console.log(graph.dfs("A"));

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

//     add(key,value){
//         const index = this.hash(key)
//         if(!this.table[index]){
//             this.table[index] = [  ]
//         }
//         this.table[index].push([key, value])
//     }

//     get(key){
//         const index = this.hash(key)
//          for(let pair of this.table[index]){
//             if(pair[0]==key){
//                 return pair[1]
//             }
//          }
//          return "not found"
//     }

//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//             if(this.table[i]){
//                 console.log(i,this.table[i]);

//             }

//         }
//     }
// }

// const table = new HashTable(10)

// table.add("one",23)
// table.add("onsdsdfe",243)
// table.add("onsdfsdfe",2323)
// table.add("onsdfsdfe",223)

// console.log(table.get("onsdfsdfe"));
// console.log(table.get("onsdfsdfe"));

// class HashTable {
// 	constructor(size) {
// 		this.table = new Array(size);
// 		this.size = size;
// 	}

// 	hash(key) {
// 		let total = 0;
// 		for(let i = 0; i < key.length; i++) {
// 			total += key.charCodeAt(i);
// 		}
// 		return total % this.size;
// 	}

// 	set(key, value) {
// 		let index = this.hash(key);
// 		let bucket = this.table[index];
// 		if(!bucket) {
// 			this.table[index] = [[key, value]];
// 		} else {
// 			let sameKeyItem = bucket.find(item => item[0] === key);
// 			if(sameKeyItem) {
// 				sameKeyItem[1] = value;
// 			} else {
// 				bucket.push([key,value]);
// 			}
// 		}
// 	}

// 	get(key) {
// 		let index = this.hash(key);
// 		let bucket = this.table[index];
// 		let sameKeyItem = bucket.find(item => item[0] === key);
// 		if(sameKeyItem) {
// 			return sameKeyItem[1];
// 		}
// 		return undefined;
// 	}

// 	remove(key) {
// 		let index = this.hash(key);
// 		let bucket = this.table[index];

// 		if(bucket) {
// 			let sameKeyItem = bucket.find(item => item[0] === key);
// 			if(sameKeyItem) {
// 				bucket.splice(bucket.indexOf(sameKeyItem), 1);
// 			}
// 		}
// 	}

// 	display() {
// 		for(let i = 0; i < this.table.length; i++) {
// 			if(this.table[i]) {
// 				console.log(i, this.table[i]);
// 			}
// 		}
// 	}
// }

// const table = new HashTable(20)

// table.set("one",23)
// table.set("onsdsdfe",243)
// table.set("onsdfsdfe",2323)
// table.set("onsdfsdfe",223)

// table.display()

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//     }

//     isEmpty(){
//         return this.head === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.head = newNode
//         }else{
//             newNode.next = this.head
//             this.head = newNode
//         }
//     }

//     append(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.head = newNode
//         }else{
//             let current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode
//         }
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value);
//             curr = curr.next
//         }
//     }

//     removeDuplicates(){
//         let current = this.head
//         let prev = null
//         let setVal = new Set()
//         while(current){
//             if(setVal.has(current.value)){
//                 prev.next = current.next
//             }else{
//                 setVal.add(current.value)
//                 prev = current
//             }
//             current = current.next
//         }
//     }
// }

// const ll = new LinkedList()

// // ll.insert(12)
// // ll.insert(122)
// // ll.insert(124)

// ll.append(12);
// ll.append(124);
// ll.append(122);
// ll.append(124);
// ll.append(124);

// console.log("Before removing duplicates:");
// ll.print();

// ll.removeDuplicates();

// console.log("After removing duplicates:");
// ll.print();

// class Node{
//     constructor(){
//         this.children = {}
//         this.endword = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char] = new Node()
//             }
//             currentNode = currentNode.children[char]
//         }
//         currentNode.endword = true
//     }

//     search(word){
//         let currentNode = this.root
//         for (let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return currentNode.endword
//     }

//     startwith(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return true
//     }

//     autocomplete(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return []
//             }
//             currentNode = currentNode.children[char]
//         }
//         let list = []
//         this.collectwords(currentNode, word, list)
//         return list
//     }

//     collectwords(node, word, list){
//         if(node.endword){
//             list.push(word)
//         }
//         for(let char in node.children){
//             this.collectwords(node.children[char], word+char, list)
//         }
//     }

//     longestPrefix() {
//         let currentNode = this.root;
//         let prefix = "";
//         while (currentNode) {
//             const keys = Object.keys(currentNode.children);
//             // console.log(keys);

//             if (keys.length === 1 && !currentNode.endword) {
//                 prefix += keys[0];
//                 currentNode = currentNode.children[keys[0]];
//             } else {
//                 break;
//             }
//         }
//         return prefix;
//     }
// }

// const trie = new Trie()

// trie.insert("apple")
// trie.insert("apples")
// trie.insert("appless")

// console.log(trie.search("bus"));
// console.log(trie.startwith("a"));
// console.log(trie.autocomplete("a"));
// console.log(trie.longestPrefix());

// function addNumbers(...numbers){
//     const num1 =5;
//     const num2 =6;
//     result = addNumbers(num1,num2);
//     console.log(result);
//     return(a+b);
// }

// The nullish coalescing (??) operator===============
// let val = null

// console.log(val??"default");

// currying
// function curriedAdd(a) {
//     return function (b) {
//       return a + b;
//     };
//   }

//   const addTwo = curriedAdd(2);
//   console.log(addTwo(3));

// .............
// function curriedAdd(a) {
//     return function (b) {
//       return function (c){
//         return a+b+c
//       }
//     };
//   }

//   const addTwo = curriedAdd(2)(3)(4)
//   console.log(addTwo);

// closure
// function fun1(){
//     let value = 12
//     function fun2(){
//         console.log(value);

//     }
//     fun2()
// }

// fun1()

// hof
// function fun(a){
//     a()
// }
// function fun1(){
//     console.log("hii");

// }
// fun(fun1)

// custom hof(map function)
// function fun(arr,add){
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(add(arr[i]))

//     }
//     return result
// }

// function add(num){
//     return num+2
// }

// const arr = [1,2,3,4,5]

// console.log(fun(arr,add));

// function prototype
// function person(name,email){
//  this.name = name
//  this.email = email
// }

// person.prototype.details = function (){
//     return `${this.name}---${this.email}`
// }

// const newPerson = new person("vivek")
// console.log(newPerson.details());

// class prototype
// class Person{
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }

//     details(){
//         return `${this.name}---${this.email}`
//     }
// }

// const newPerson = new Person("vivek","mail.com")

// console.log(newPerson.details());

// const obj={
//     name:"vivek",
//     email:"mail.com",
//     place:{
//         city:"qqqqqqqqq"
//     }
// }

// console.log(obj.place instanceof Object);

// function sumPrime(arr,i=0){
//     if(i>=arr.length){
//         return 0
//     }
//     if(check(arr[i])){
//         return arr[i]+=sumPrime(arr,i+1)
//     }else{
//         return sumPrime(arr,i+1)
//     }
// }

// function check(num){
//     let count = 0
//     for (let i = 0; i <= num; i++) {
//         if(num%i==0){
//             count++
//         }

//     }
//     if(count==2){
//         return num
//     }
// }

// const arr = [0,1,2,4,3,5,6,7,8,9]

// console.log(sumPrime(arr));

// function palindrome(str, i=0, j=str.length-1){
//     if(i>j){
//         return true
//     }
//     if(str[i]!==str[j]){
//         return false
//     }else{
//         return palindrome(str,i+1, j-1)
//     }
// }

// console.log(palindrome("malayalam"));

// const target = {
//     name: "Alice",
//     age: 25
//   };

//   const handler = {
//     get(target, prop) {
//       console.log(`Property ${prop} was accessed`);
//       return prop in target ? target[prop] : `Property "${prop}" not found!`;
//     },
//     set(target, prop, value) {
//       console.log(`Property ${prop} was set to ${value}`);
//       target[prop] = value;  // Set the value
//       return true;  // Indicate success
//     }
//   };

//   const proxy = new Proxy(target, handler);

//   console.log(proxy.name);  // Logs: "Property name was accessed" and then "Alice"
//   proxy.age = 30;  // Logs: "Property age was set to 30"
//   console.log(proxy.age);  // Logs: "Property age was accessed" and then 30
//   console.log(proxy.city);  // Logs: "Property city was accessed" and then "Property 'city' not found!"

// let globalVar = "I am global";

// function outerFunction() {
//   let outerVar = "I am outer";

//   function innerFunction() {
//     let innerVar = "I am inner";
//     console.log(globalVar); // Accesses global scope
//     console.log(outerVar);  // Accesses outer function scope
//     console.log(innerVar);  // Accesses inner function scope
//   }

//   innerFunction();
// }

// outerFunction();

// Scope Chain
// let value = 11
// function fun1(){
//     let value1 = 12
//     function fun2(){
//         let value2 = 13
//         console.log(value);
//         console.log(value1);
//         console.log(value2);

//     }
//     fun2()
// }
// fun1()

// shadowing
// let a = 12
// function fun(){
//     let a = 23
//     console.log(a);
// }
// fun()
// console.log(a);

// const arr = [2,3,5,8,12,34,46]
// function binarySearch(arr,target){
//     let start = 0
//     let end = arr.length-1

//     while(start<=end){
//         const mid = Math.floor((start+end)/2)
//         if(arr[mid] == target){
//             return true
//         }else if(arr[mid]<target){
//             start = mid+1
//         }else{
//             end = mid-1
//         }
//     }
//     return false
// }

// console.log(binarySearch(arr,5));

// const obj = {
//     a:3,
//     b:[3,4,5,6,8],
//     c:{
//         x:3,
//         y:5,
//         z:8
//     }
// }

// let total = 0
//     total+=obj.a
//     total+=obj.b.reduce((acc,curr)=>acc+curr,0)
//     total+=Object.values(obj.c).reduce((acc,curr)=>acc+curr)

// console.log(total);

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.head == null){
//             this.head = newNode
//         }else{
//             newNode.next = this.head
//             this.head = newNode
//         }
//     }

//     addLast(value){
//         const newNode = new Node(value)
//         if(this.head == null){
//             this.head = newNode
//         }else{
//             let current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode
//         }
//     }

//     findMid(){
//         let slow = this.head
//         let fast = this.head
//         while(fast&&fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }
//         return slow.value
//     }

//     deleteAtK(position){
//         let current = this.head
//         let prev = null
//         for (let i = 1; i < position; i++) {
//             prev = current
//             current = current.next
//         }
//         prev.next = current.next
//     }

//     removeMid(){
//         let fast = this.head
//         let slow = this.head
//         let prev = null
//         while(fast&&fast.next){
//             fast = fast.next.next
//             prev = slow
//             slow = slow.next
//         }
//         if(prev){
//             prev.next = slow.next
//         }
//     }

//     search(value){
//         let current = this.head
//         while(current){
//             if(current.value == value){
//                 return true
//             }else{
//                 current = current.next
//             }
//         }
//         return false
//     }

//     removeDup(){
//         let current = this.head
//         let prev = null
//         const valSet = new Set()

//         while(current){
//             if(valSet.has(current.value)){
//                 prev.next = current.next
//             }else{
//                 valSet.add(current.value)
//                 prev = current
//             }
//             current = current.next
//         }
//     }

//     reverse(){
//         let current = this.head
//         let next = null
//         let prev = null
//         while(current){
//             next = current.next
//             current.next = prev
//             prev = current
//             current = next
//         }
//         this.head = prev
//     }

//     circle(){
//         let current = this.head.next
//         while(current!=null&&current!=this.head){
//             current = current.next
//         }
//         return current == this.head
//     }

//     print(){
//         let current = this.head
//         while (current) {
//             console.log(current.value);
//             current= current.next
//         }
//     }
// }

// const ll = new LinkedList
// // ll.iinsert(23)
// // ll.iinsert(233)
// // ll.iinsert(234)

// ll.addLast(23)
// ll.addLast(233)
// ll.addLast(234)
// ll.addLast(24)
// ll.addLast(34)
// ll.addLast(34)

// // ll.removeMid()
// // ll.removeDup()
// ll.reverse()
// ll.print()
// console.log(ll.circle());

// // console.log(ll.search(23));
// // console.log(ll.findMid());

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null
//     }

//     push(value){
//         const newNode = new Node(value)
//         if(this.top == null){
//             this.top = newNode
//         }else{
//             newNode.next = this.top
//             this.top = newNode
//         }
//     }

//     pop(){
//         const popped = this.top
//         this.top = this.top.next
//     }

//     print(){
//         let current = this.top
//         while(current){
//             console.log(current.value);
//             current = current.next
//         }
//     }
// }

// const stack = new Stack()
// stack.push(23)
// stack.push(232)
// stack.push(233)

// stack.print()

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(value){
//         this.items.push(value)
//     }

//     pop(){
//        return this.items.pop()
//     }

//     reverse(str){
//         const newStack = new Stack()
//         for (let i = 0; i < str.length; i++) {
//             newStack.push(str[i])
//         }
//         let string = ""
//         while(newStack.items.length>0){
//             string+=newStack.pop()
//         }
//         return string
//     }
// }

// const stack = new Stack()

// stack.push(12)
// stack.push(112)
// stack.push(142)
// stack.push(123)

// console.log(stack);

// console.log(

//     stack.reverse("vivek")
// );

// const arr = [2,4,5,6,12,34,56,78,89]

// function fun(arr,target){
//     let start = 0
//     let end = arr.length-1
//     while(start<end){
//         const mid = Math.floor((start+end)/2)
//         if(arr[mid]==target){
//             return true
//         }else if(arr[mid]<target){
//             start = mid+1
//         }else{
//             end = mid-1
//         }
//     }
//     return false
// }
// console.log(fun(arr,53));

// const arr = [2,4,5,6,12,34,56,78,89]
// function recursion(arr,target,start = 0, end = arr.length-1){
//     if(start>end){
//         return false
//     }
//     let mid = Math.floor((start+end)/2)
//     if(arr[mid]==target){
//         return true
//     }else if(arr[mid]<target){
//         return recursion(arr,target,start = mid+1, end)
//     }else{
//         return recursion(arr,target,start, end = mid-1)
//     }
// }
// console.log(recursion(arr,5));

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root == null;
//   }

//   insert(value) {
//     const newNode = new Node(value);
//     if (this.root == null) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(root, node) {
//     if (node.value < root.value) {
//       if (root.left == null) {
//         root.left = node;
//       } else {
//         this.insertNode(root.left, node);
//       }
//     } else {
//       if (root.right == null) {
//         root.right = node;
//       } else {
//         this.insertNode(root.right, node);
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

//   max(root) {
//     if (!root.right) {
//       return root.value;
//     } else {
//       return this.max(root.right);
//     }
//   }

//   inOrder(root) {
//     if (root) {
//       this.inOrder(root.left);
//       console.log(root.value);
//       this.inOrder(root.right);
//     }
//   }

//   search(root, value) {
//     if (!root) {
//       return false;
//     } else {
//       if (root.value == value) {
//         return true;
//       } else if (root.value > value) {
//         return this.search(root.left, value);
//       } else {
//         return this.search(root.right, value);
//       }
//     }
//   }

//   levelOrder(root) {
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

//   height(root){
//     if(root==null){
//         return 0
//     }
//     let left = this.height(root.left)
//     let right = this.height(root.right)
//     return Math.max(left,right)+1
//   }

//   seconsdLarge(){
//     let arr = []
//     this.helper(this.root, arr)
//     return arr[2]
//   }

//   helper(root,arr){
//     if(root==null){
//         return arr
//     }
//     this.helper(root.right, arr)
//     arr.push(root.value)
//     this.helper(root.left, arr)
//   }

// }

// const bst = new BST();

// bst.insert(314);
// bst.insert(34);
// bst.insert(343);
// bst.insert(3143);
// bst.insert(3423);
// bst.insert(3343);
// bst.insert(3443);
// bst.insert(4);

// console.log(

//     bst.seconsdLarge()
// );

// function quick(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let left = []
//     let right = []
//     const pivot = arr[0]

//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quick(left),pivot,...quick(right )]
// }

// const arr = [3,4,2,5,6,7,8,2,12,45,9,56]
// console.log(quick(arr));

// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     const mid = Math.floor(arr.length-1)
//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid)

//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right){
//     let result = []
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             result.push(left.shift())
//         }else{
//             result.push(right.shift())
//         }
//     }
//     return [...result,...left,...right]
// }

// console.log(
//     mergeSort([3,5,2,7,9,0,6,4,3])
// );

// function bubble(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1  ; j < arr.length; j++) {
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }

// console.log(bubble([3,5,21,34,5,6,7,7]));

// function insertion(array){
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i; j >=0; j--) {
//             if(array[j]<array[j-1]){
//                 [array[j],array[j-1]] = [array[j-1],array[j]]
//             }
//         }
//     }

//     return array
// }
// console.log(insertion([3,5,21,34,5,6,7,7]));

// function selection(arr){
//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[j]>arr[lowest]){
//                 lowest = j
//             }
//         }
//         if(lowest!=i){
//             [arr[i],arr[lowest]] = [arr[lowest],arr[i]]
//         }
//     }
//     return arr
// }
// console.log(selection([3,5,21,34,5,6,7,7]));

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = []
//         }
//     }

//     addEdges(vertex1, vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)
//     }

//     bfs(start){
//         const result = []
//         const queue = [start]
//         const visited = {}
//         visited[start] = true

//         while(queue.length){
//             let vertex = queue.shift()
//             result.push(vertex)

//             this.adjacencyList[vertex].forEach(element=>{
//                 if(!visited[element]){
//                     queue.push(element)
//                     visited[element] = true
//                 }
//             })
//         }
//         return result
//     }

//     bfs(start){
//         const result = []
//         const visited = {}
//         const adjacencyList = this.adjacencyList

//         function helper(vertex){
//             if(!vertex) return
//             result.push(vertex)
//             visited[vertex] = true

//             adjacencyList[vertex].forEach(element=>{
//                 if(!visited[element]){
//                     helper(element)
//                 }
//             })
//         }
//         helper(start)
//         return result
//     }
// }

// const graph = new Graph()

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")

// graph.addEdges("A","D")
// graph.addEdges("A","C")
// graph.addEdges("B","C")
// graph.addEdges("A","D")

// console.log(graph.bfs("A"));

// const arr = [3,4,5,2,4,5,6,7,8,8,7,6,5,4,3,3,2]

// const setArray = new Set()
// const result = []
// for (let i = 0; i < arr.length; i++) {
//     setArray.add(arr[i])

// }
// console.log(...setArray);

// const arr = [3,4,5,2,4,5,6,7,8,8,7,6,5,4,3,3,2]
// const frequency =  {}
// for (let i = 0; i < arr.length; i++) {
//     if(frequency[arr[i]]){
//         frequency[arr[i]]++
//     }else{
//         frequency[arr[i]]=1
//     }
// }
// console.log(frequency);

// const arr = [23, 5, 6, 7, 89, 1];
// function customMap(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result
// }

// function callback(num){
//     return num+5
// }

// console.log(customMap(arr,callback));

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

//   reverse(){
//     const newStack = new Stack()
//     while(this.items.length>0){
//       newStack.push(this.items.pop())
//     }
//     return newStack
//   }
// }

// const stack = new Stack()

// stack.push(23)
// stack.push(213)
// stack.push(233)

// console.log(stack.items);

// console.log(stack.items.reverse());

// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class Stack{
//   constructor(){
//     this.top = null
//   }

//   push(value){
//     const newNode = new Node(value)
//     if(this.top == null){
//       this.top = newNode
//     }else{
//       newNode.next = this.top
//       this.top = newNode
//     }
//   }

//   print(){
//     let current = this.top
//     while(current){
//       console.log(current.value);
//       current = current.next
//     }
//   }

//   removeDup(){
//     let current = this.top
//     let prev = null
//     let newSet = new Set()

//     while(current){
//       if(newSet.has(current.value)){
//         prev.next = current.next
//       }else{
//         newSet.add(current.value)
//         prev = current
//       }
//       current = current.next
//     }
//   }

//   reverse(){
//     let current = this.top
//     let prev = null
//     let next = null
//     while(current){
//       next = current.next
//       current.next = prev
//       prev = current
//       current = next
//     }
//     this.top = prev
//   }
// }

// const stack = new Stack()

// stack.push(12)
// stack.push(122)
// stack.push(122)
// stack.push(122)
// stack.push(122)
// stack.push(124)

// // stack.removeDup()
// stack.reverse()
// stack.print()

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

//   startWith(word){
//     let currentNode = this.root
//     for(let char of word){
//       if(!currentNode.children[char]){
//         return false
//       }
//       currentNode = currentNode.children[char]
//     }
//     return true
//   }

//   search(word){
//     let currentNode = this.root
//     for(const char of word){
//       if(!currentNode.children[char]){
//         return false
//       }
//       currentNode = currentNode.children[char]
//     }
//     return currentNode.endword
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
//     this.collectedWords(currentNode, word, list)
//     return list
//   }

//   collectedWords(node, word, list){
//     if(node.endword){
//       list.push(word)
//     }
//     for(let char in node.children){
//       this.collectedWords(node.children[char], word+char, list)
//     }
//   }

// //   longestPrefix() {
// //     let currentNode = this.root;
// //     let prefix = "";

// //     while (currentNode) {
// //         const keys = Object.keys(currentNode.children);
// //         if (keys.length === 1 && !currentNode.endword) {
// //             prefix += keys[0];
// //             currentNode = currentNode.children[keys[0]];
// //         } else {
// //             break;
// //         }
// //     }
// //     return prefix;
// // }

// prefix(){
//   let current = this.root
//   let prefix = ""
//   while(current){
//     let keys = Object.keys(current.children)
//     if(!current.endword){
//       prefix+=keys[0]
//       current = current.children[keys]
//     }else{
//       break
//     }
//   }
//   return prefix
// }

// }

// const trie = new Trie()

// trie.insert("car")
// trie.insert("cars")
// trie.insert("carsr")
// trie.insert("carsrr")

// // console.log(trie.startWith("c12"));

// // console.log(trie.autoComplete("c"));
// // console.log(trie.longestPrefix())
// console.log(trie.prefix())

// function ispal(str,i=0, j=str.length-1){
//   if(i>j){
//     return true
//   }
//   if(str[i]!=str[j]){
//     return false
//   }else{
//     return ispal(str,i+1, j-1)
//   }
// }
// const str = "mam"
// console.log(ispal(str));

// function addd(arr,i=0){
//   if(arr.length<=i){
//     return 0
//   }
//   return arr[i] += addd(arr,i+1)
// }

// console.log(addd([3,2,4,1,12]));

// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % this.table.length;
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     if (!this.table[index]) {
//       this.table[index] = [];
//     }
//     this.table[index].push({ key, value });
//   }

//   get(key) {
//     const index = this.hash(key);
//     let val = this.table[index]
//     let value = [];
//     if (this.table[index]) {
//       for (let i=0;i<val.length;i++) {
//         if (val[i].key == key) {
//           value.push(val[i]);
//         }
//       }
//     }
//     console.log(value);
//   }

//   remove(key) {
//     let index = hash(key);
//     let pair = this.table[index]
//     for (let i = 0; i < pair.length; i++) {
//       if(pair.key==key){
//         pair[i] = undefined
//       }

//     }
//   }

//   print() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(this.table[i]);
//       }
//     }
//   }

//   removeDup(arr) {
//     let table = new HashTable(arr.length);
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (!table[arr[i]]) {
//         table[arr[i]] = true;
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
// }

// const table = new HashTable(10);

// table.set("vivek", 23);
// table.set("vivek", 231);
// table.set("varun", 232);
// table.set("viv23ek", 23);
// table.set("vivsdf23ek", 23);
// table.set("vivwef34rek", 23);

// // table.print()
// // console.log(table.removeDup([4,4,5,3,2,4,3,2,6,7,9,1]));
// table.get("vivek");

// // // heap sort
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

// class Heap{
//   constructor(){
//     this.heap = []
//   }

//   getParentIndex(index){
//     return Math.floor((index-1)/2)
//   }
//   getLeftCHildInd(index){
//     return (index*2)+1
//   }
//   getRightCHildInd(index){
//     return (index*2)+2
//   }
//   getParent(index){
//     return this.heap[this.getParentIndex(index)]
//   }
//   getLeftCHild(index){
//     return this.heap[this.getLeftCHildInd(index)]
//   }
//   getRightCHild(index){
//     return this.heap[this.getRightCHildInd(index)]
//   }
//   hasParent(index){
//     return index>0
//   }

//   swap(ind1, ind2){
//     [this.heap[ind1], this.heap[ind2]] =  [this.heap[ind2], this.heap[ind1]]
//   }

//   insert(value){
//     this.heap.push(value)
//     this.heapifyUp()
//   }

//   heapifyUp(){
//     let currentIndex = this.heap.length-1
//       while(this.hasParent(currentIndex)&&this.heap[currentIndex]<this.getParent(currentIndex)){
//         this.swap(currentIndex, this.getParentIndex(currentIndex))
//         currentIndex = this.getParentIndex(currentIndex)
//       }
//   }

//   remove(){
//     let removedVal = this.heap[0]
//     this.heap[0] = this.heap.pop()
//     const temp = [...this.heap]
//     this.heap = []
//     for (const val of temp) {
//       this.insert(val)
//     }
//     return removedVal
//   }

//   sort(arr){
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//       this.insert(arr[i])

//     }
//     for (let i = 0; i < this.heap.length; i++) {
//       result.push(this.remove())

//     }
//     return result
//   }
// }

// const heap = new Heap()
// heap.insert(10)
// heap.insert(4)
// heap.insert(11)
// heap.insert(6)
// // heap.remove()
// console.log(heap)
// console.log(heap.sort([34,12,8,23,1]))

// const arr = [123, 543, 765, 2345];

// function reverse(arr) {
//   const result = [];
//   for (let i = arr.length-1; i >= 0; i--) {
//     let reverseNum = 0;//5,54,543
//     let num = arr[i];//2345,234,23
//     while(num>0){
//         let remainder = num%10
//         reverseNum = (reverseNum*10)+remainder
//         num = Math.floor(num/10)
//     }
//     result.push(reverseNum)
//   }
//   return result
// }

// console.log(reverse(arr));

// const arr = [3,4,5,6,7]

// function rec(arr, i=0){
//   if(arr.length<=i){
//     return 0
//   }
//   if(check(arr[i])){
//     return arr[i]+=rec(arr, i+1)
//   }else{
//     return rec(arr, i+1)
//   }
// }

// function check(num){
//   if(num%2==0){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(rec(arr));

// function quick(arr){
//   if(arr.length<=1){
//     return arr
//   }
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
//   return [...quick(left),pivot, ...quick(right)]
// }

// const arr = [2,4,3,5,2,3,4]
// console.log(quick(arr));

// function mergeSort(arr){
//   if(arr.length<=1){
//     return arr
//   }
//   const mid = Math.floor(arr.length/2)
//   const left = arr.slice(0,mid)
//   const right = arr.slice(mid)

//   return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left,right){
//   let result = []
//   while(left.length && right.length){
//     if(left[0]<right[0]){
//       result.push(left.shift())
//     }else{
//       result.push(right.shift())
//     }
//   }
//   return [...result,...left,...right]
// }
// const arr = [7,5,4,3,3,2,2,3,4]
// console.log(mergeSort(arr));

// const arr = [23,543,123]
// function reversearr(){
//   let result = []
//   for (let i = arr.length-1; i>=0; i--) {
//     let reverse = 0
//     let num = arr[i]
//     while(sum>0){
//       let reminder = num%10
//       reverse = (reverse*10)+reminder
//       num = Math.floor(num/10)
//     }

//     result.push(reverse)
//   }
//   return result
// }

// console.log(reversearr(arr));/

// const str = "qqqqwerrrrrrrrrreee"
// function longSub(str){
//   let answer = ""
//   for (let i = 0; i < str.length; i++) {
//   let string = ""
//   let count = 1
//   while(str[i]==str[i+1]){
//     // count++
//     string+=str[i]
//     i++
//   }
//   if(string.length>answer.length){
//     answer = string+str[i]
//   }
// }
// return answer
// }

// console.log(longSub(str));

// const obj = {
//   name:"vivek",
//   email : "@gmial.com",
//   pasword: "34"
// }

// const keys = Object.keys(obj)
// const last = keys[keys.length-1]
// delete obj[last]
// console.log(obj);

// const arr = [
//   {
//     a: 3,
//     adf: { l: [3, 23, 423, 5] },
//   },
//   {
//     a: 3,
//     adf: { l: [3, 23, 423, 5] },
//   },
//   {
//     a: 3,
//     adf: { l: [3, 23, 423, 5] },
//   },
// ];

// function sum(arr, i = 0) {
//   if (arr.length <= i) {
//     return 0;
//   }
//   return check(arr[i]) + sum(arr, i + 1);
// }

// function check(num) {
//   let total = 0;
//   if (num) {
//     total += num.a;
//     total += num.adf.l.reduce((acc, curr) => acc + curr, 0);
//   }
//   return total;
// }

// console.log(sum(arr));

// const arr = [4,3,5,6,7,8,9]

// function customMap(arr,callback){
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]))
//   }
//   return result
// }

// function callback(num){
//   return num+3
// }

// console.log(customMap(arr,callback));

// const a = "vivek"
// const b = "evekm"
// function anagram(a,b){
//   let exist = true
//   for (let i = 0; i < b.length; i++) {
//     if(a.indexOf(b[i])==-1){
//        exist = false
//     }
//   }
//   return exist
// }

// console.log(anagram(a,b));

// const obj = {
//     name:"vivek",
//     emial:"email.com"
// }
// function fun_borrow(greet,qq){
//     console.log(`${greet} ${this.name} ${qq}`);
// }
// fun_borrow.call(obj,"hiii","hello")

// const obj1 = {
//     name:"vivek",
//     emial:"email.com"
// }
// function fun_borrow(greet,qq){
//     console.log(`${greet} ${this.name} ${qq}`);
// }
// fun_borrow.apply(obj1,["hiii","hello"])

// const obj2 = {
//     name:"vivek",
//     emial:"email.com"
// }
// function fun_borrow(greet,qq){
//     console.log(`${greet} ${this.name} ${qq}`);
// }
// const newfun = fun_borrow.bind(obj1,"hiii","hello")
// newfun()

// function* generator(){
//     let i=100
//     while(i>0){
//         if(i%5==0){
//             yield i
//         }
//         i--
//     }
// }
// const gen = generator()
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// closure
// function fun() {
//   let i = 10;
//   function fun1() {
//     console.log(i);
//   }
//   fun1();
// }
// fun();

// let weakaset = new WeakSet()
// const obj = {
//   name: "vivek"
// }

// weakaset.add(obj)

// console.log(weakaset.has(obj));

// let weakMap = new WeakMap()
// const obj = {
//   name:"vivek"
// }
// weakMap.set(obj, "email")
// console.log(weakMap.get(obj));

// const a = 10
// function fun(){
//   const a = 20
//   console.log(a);

// }
// console.log(fun.prototype);

// arrow vs normal

// const obj = {
//   name:"vivek"
// }

// const fun1 = () => {
//   console.log(`hii${this.name}`);

// }

// function fun(){
//   console.log(`hello${this.name}`);

// }

// fun1.call(obj)
// fun.call(obj)

// const ArrowFunc = () => {};
// function NormalFunc() {}

// new NormalFunc(); // Works
// new ArrowFunc();  // TypeError: ArrowFunc is not a constructor

// function validpar(str){
//   let result = []
//   for (let i = 0; i < str.length; i++) {
//     if(str[i]=="{"){
//       result.push("}")
//     }else if(str[i]=="("){
//       result.push(")")
//     }else if(str[i]=="["){
//       result.push("]")
//     }else{
//       if(result.pop()!==str[i]){
//         return false
//       }
//     }

//   }
//   return true
// }
// console.log(validpar("[[][]()]"));

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.top == null){
//             this.top = newNode
//         }else{
//             newNode.next = this.top
//             this.top = newNode
//         }
//     }

//     print(){
//         let currentNode = this.top
//         while(currentNode){
//             console.log(currentNode.value);
//             currentNode = currentNode.next
//         }
//     }

//     pop(){
//         let val = this.top
//         this.top = this.top.next
//         return val
//     }

//     removeDup(){
//         if(this.top == null){
//             return
//         }
//         let current  = this.top
//         let prev = null
//         let values = new Set()
//         while(current){
//             if(values.has(current.value)){
//                 prev.next = current.next
//             }else{
//                 values.add(current.value)
//                 prev = current
//             }
//             current = current.next
//         }
//     }

//     reverse(){
//         let current = this.top
//         let prev = null
//         let next = null
//         while(current){
//             next = current.next
//             current.next = prev
//             prev = current
//             current = next
//         }
//         this.top = prev
//     }

// }

// const stack = new Stack()

// stack.insert(324)
// stack.insert(3264)
// stack.insert(34)
// stack.insert(34)
// stack.insert(34)
// stack.insert(34)

// stack.removeDup()
// stack.reverse()
// stack.print()

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(value){
//        return this.items.push(value)
//     }

//     pop(){
//         return this.items.pop()
//     }

//     print(){
//         for (let i = 0; i < this.items.length; i++) {
//             console.log(this.items[i]);
//         }
//     }

//     reverseStack(){
//         const newStack = new Stack()
//         while(this.items.length>0){
//             newStack.push(this.items.pop())
//         }
//         this.items = newStack.items
//     }

//     reverseString(str){
//         const newStack = new Stack()
//         let string = ""
//         for (let i = 0; i < str.length; i++) {
//             newStack.push(str[i])
//         }

//         while(newStack.items.length){
//             string+=newStack.items.pop()
//         }
//         return string
//     }

// }

// const stack = new Stack()

// stack.push(23)
// stack.push(223)
// stack.push(234)

// stack.reverseStack()
// stack.print()
// console.log(stack.reverseString("vivek"));

// const arr = [2,4,5,3,1,20]

// function sumPrime(arr,i=0){
//     if(arr.length<=i){
//         return 0
//     }
//     if(check(arr[i])){
//         return arr[i]+=sumPrime(arr, i+1)
//     }else{
//         return sumPrime(arr, i+1)
//     }
// }

// function check(num){
//     let count = 0
//     for (let i = 0; i <= num; i++) {
//         if(num%i==0){
//             count++
//         }
//     }
//     if(count ==2){
//         return num
//     }else{
//         return false
//     }
// }

// console.log(sumPrime(arr));

// function add(arr,i=0){
//     if(arr.length<=i){
//         return 0
//     }
//     return arr[i]+=add(arr,i+1)
// }

// console.log(add([2,3,4]));

// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.root == null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(root, node){
//         if(node.value<root.value){
//             if(root.left==null){
//                 root.left = node
//             }else{
//                 return this.insertNode(root.left, node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right = node
//             }else{
//                return this.insertNode(root.right, node)
//             }
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }

//     levelOrder(){
//         let arr = []
//         arr.push(this.root)
//         while(arr.length){
//             let currentNode = arr.shift()
//             console.log(currentNode.value);
//             if(currentNode.left){
//                 arr.push(currentNode.left)
//             }
//             if(currentNode.right){
//                 arr.push(currentNode.right)
//             }
//         }
//     }

//     secondLarge(){
//         let arr = []
//         this.helper(this.root,arr)
//         return arr[0]
//     }

//     helper(root, arr){
//         if(!root){
//             return arr
//         }
//         this.helper(root.right, arr)
//         arr.push(root.value)
//         this.helper(root.left, arr)
//     }

//     height(root){
//         if(!root){
//             return -1
//         }
//             let left = this.height(root.left)
//             let right = this.height(root.right)
//             return Math.max(left,right)+1
//     }

//     search(root, value){
//         if(root){
//             if(root.value == value){
//                 return true
//             }else{
//                 if(root.value>value){
//                     return this.search(root.left, value)
//                 }else{
//                     return this.search(root.right, value)
//                 }
//             }
//         }
//         return false
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
// }

// const bst = new BST()

// bst.insert(34)
// bst.insert(341)
// bst.insert(334)
// bst.insert(24)
// bst.insert(35)
// bst.insert(36)
// bst.insert(37)
// bst.insert(3)
// bst.insert(38)

// // console.log(bst.height(bst.root));
// console.log(bst.secondLarge());

// // bst.inOrder(bst.root);
// // bst.levelOrder(bst.root);

// console.log(bst.search(bst.root, 341));
// console.log(bst.min(bst.root));

// const nums = [3,4,5,6,7]

// const mid =Math.max( nums.length/2)
// const arr = []
// for (let i = nums.length-1; i >=0; i--) {
//     if(mid>i){
//         arr.push(nums[i]*2)
//     }else{
//         arr.push(nums[i]*5)
//     }

// }
// console.log(arr);

// function fun( arr,callback){
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]))
//     }
//     return result
// }

// function fun1(num){
//     return num+2
// }

// console.log(fun([2,3,4,5,6,7],fun1));

// function fun(a){
//     return function fun1(b){
//         return function fun2(c){
//             return function fun3(d){
//                console.log(a+b+c+d);

//             }
//         }
//     }
// }

// const add = fun(2)(3)
// add(4)(3)

// function quick(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     const pivot = arr[0]
//     let left = []
//     let right = []

//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else {
//             right.push(arr[i])
//         }

//     }
//     return [...quick(left),pivot, ...quick(right)]
// }

// console.log(quick([2,7,5,3,1,3,5,7,9,0]));

// function fun(){
//     return new Promise((resolve,reject)=>{
//         console.log("11111111");
//         resolve()
//     })
// }

// function fun1(){
//     return new Promise((resolve,reject)=>{
//         console.log("22222222");
//         setTimeout(()=>{
//             resolve()

//         },4000)
//     })
// }

// function fun3(){
//     return new Promise((resolve,reject)=>{
//         console.log("33333333");
//         setTimeout(()=>{
//             resolve()

//         },3000)
//     })
// }

// fun().then(()=>fun1())
// .then(()=>fun3())
// .then(()=>console.log("completed"))

// fun(()=>{
//     fun1(()=>{
//         fun3(()=>{
//             console.log("all completed");

//         })
//     })
// })

// function quick(arr){
//     if(arr.length <=1){
//         return arr
//     }
//     const pivot = arr[0]
//     let left = []
//     let right = []

//     for(i=1;i<arr.length;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return quick(left.join(""))+pivot+quick(right.join(""))
// }

// console.log("quick",quick("acbdfe"));

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
//     const result = []
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             result.push(left.shift())
//         }else{
//             result.push(right.shift())
//         }
//     }
//     return [...result,...left,...right]
// }
// console.log(mergeSort([3,4,2,3,5,6,7,6,9,8]));

// const arr = [1,2,3,2,2,4,5,7,6,5,4,7]
// function removeDuplicates(arr){
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0
//         for (let j = 1; j < arr.length; j++) {
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
// console.log(removeDuplicates(arr));

// const arr = [1,2,3,2,2,4,5,7,6,5,4,7]
// function removeDuplicates(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1;j < arr.length;j++) {
//             if(arr[i]==arr[j]){
//                 arr.splice(j,1)
//                 j--
//             }

//         }
//     }
//     return arr
// }
// console.log(removeDuplicates(arr));

// const arr = [1,2,3,2,2,4,5,7,6,5,4,7]
// function fun(){
//     let values = {}
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//        if(!values[arr[i]]){
//         values[arr[i]] = true
//         result.push(arr[i])
//        }

//     }
//     return result
// }
// console.log(fun(arr));

// const arr = [1,2,3,2,2,4,5,7,6,5,4,7]

// function fun(arr){
//     const frequency = {}
//     for (let i = 0; i < arr.length; i++) {
//         if(frequency[arr[i]]){
//             frequency[arr[i]]+=1
//         }else{
//             frequency[arr[i]] = 1
//         }

//     }
//     return frequency
// }

// console.log(fun(arr));

// const obj = {
//     name:"vivek",
//     place:{
//         city: "myCity"
//     }
// }

//1st level and nested will change
// const shallowCopy = {...obj}
// shallowCopy.name = "namechanged"
// shallowCopy.place.city = "cityChanged"
// console.log(obj.name);
// console.log(obj.place.city);

// 1st level will change but nested will not change
// const deepCopy = structuredClone(obj)
// deepCopy.name = "namechanged"
// deepCopy.place.city = "cityChanged"
// console.log(obj.name);
// console.log(obj.place.city);

// let i=0
// do {
//     console.log("hii");
//     i++
// }while(i<10)

// handle promise using async/await
// async function getData(){
//     const fetchData = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data =  await fetchData.json()
//     console.log(data);
// }
// getData()

// const arr = [10,2,7,4,3,9,0]
// const large = arr.reduce((acc,curr)=>{
//     if(acc>curr){
//         return acc
//     }else{
//         return curr
//     }
// })

// console.log(large);

// const obj = {
//     name: " vivek"
// }
// // key value pair
// const weakset = new WeakSet()
// weakset.add(obj)
// console.log(weakset.has(obj));

// // obj is key and we can assign value
// const weakmap = new WeakMap()
// weakmap.set(obj, 'hello')
// console.log(weakmap.get(obj));

// remove prime numbers from array
// const arr = [6, 4, 8, 9, 4];
// function removePrime(arr, check) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (check(arr[i])) {
//       result.push(check(arr[i]));
//     }
//   }
//   return result.reduce((acc, curr) => acc + curr);
// }

// function check(num) {
//   let count = 0;
//   for (let i = 0; i < num; i++) {
//     if (num % i == 0) {
//       count++;
//     }
//   }
//   if (count > 2 || count < 2) {
//     return false;
//   } else {
//     return num;
//   }
// }
// console.log(removePrime(arr, check));

// const str = "wwrrrrrrccccccc"
// function longest(str){
//     let result = ""
//     for (let i = 0; i < str.length; i++) {
//         let string = ""
//         while(str[i]==str[i+1]){
//             string+=str[i+1]
//             i++
//         }
//         if(result.length<string.length){
//             result = string
//         }
//     }
//     return result
// }
// console.log(longest(str));

// const arr = [234,654,789]
// function reverse(){
//     let result = []
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

// const arr = [2,3,4,5,6,7,8,9]
// function binarySearch(arr,target){
//     let start  = 0
//     let end = arr.length-1
//     while(start<=end){
//         let mid = Math.floor((start+end)/2)
//         if(arr[mid]==target){
//             return true
//         }else if(arr[mid]<target){
//             start = mid+1
//         }else{
//             end = mid-1
//         }
//     }
//     return false
// }
// console.log(binarySearch(arr,7));

// const arr = [2,3,4,5,6,7,8,9]
// function binarySearch(arr,target,start=0,end = arr.length-1){
//     if(start>end){
//         return false
//     }
//     let mid = Math.floor((start+end)/2)
//     if(arr[mid]==target){
//         return true
//     }else if(arr[mid]<target){
//         return binarySearch(arr,target,mid+1, end )
//     }else{
//         return binarySearch(arr,target,start, mid-1 )
//     }
// }
// console.log(binarySearch(arr,43));

// const sentence = "hii hello how are you"
// function findLarge(sentence){
//     let result = ""
//     for (let i = 0; i < sentence.length; i++) {
//         let string = ""
//         while(sentence[i]!==" "&&sentence[i]!==undefined){
//             string+=sentence[i]
//             i++
//         }
//         if(string.length>result.length){
//             result = string
//         }
//     }
//     return result
// }
// console.log(findLarge(sentence));

// const sentence = "hii hello how are you";
// function fun(sentence) {
//   return sentence.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
// }
// console.log(fun(sentence));

// function* generator(){
//     let i=100
//     while(i>0){
//         if(i%5==0){
//             yield i
//         }
//         i--
//     }
// }
// const gen = generator()
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// const obj = {
//     name:"vivek",
//     email:"email.com",
//     place:"caliut"
// }
// const obj1 = Object.keys(obj)
// const last = obj1[obj1.length-1]
// delete obj[last]
// console.log(obj);

// const arr = ["apple", "apple", "ban","mang", "mang"]
// const ans = arr.reduce((acc,curr)=>{
//     acc[curr] = (acc[curr] ||0)+1
//     return acc
// },{})

// console.log(ans);

// const arr = ["apple", "apple", "ban", "mang", "mang"];
// function fun(arr){
//     let ans = {}
//     for (let i = 0; i < arr.length; i++) {
//         if(ans[arr[i]]){
//             ans[arr[i]]+=1
//         }else{
//             ans[arr[i]]=1
//         }
//     }
//     return ans
// }
// console.log(fun(arr));

// const arr = ["apple", "apple", "ban", "mang", "mang"];
// function remove(arr){
//     let set = {}
//     let ans = []
//     for (let i = 0; i < arr.length; i++) {
//         if(!set[arr[i]]){
//             set[arr[i]] = true
//             ans.push(arr[i])
//         }
//     }
//     return ans
// }
// console.log(remove(arr));

// const arr = [23,34,23,45,56,6,7,89,980]

// function  fun(one,two,...nums){
//     console.log(one);
//     console.log(two);
//     console.log(nums);

// }
// fun(3,4,2,3,5,6,7,9,0)

// const arr = [2,3,4,5,6]
// function fun(ar){
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//          total+=arr[i]

//     }
//     return total
// }

// console.log(fun(arr));

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
//     if (this.root == null) {
//       this.root = newNode;
//     } else {
//       return this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(root, node) {
//     if (root.value > node.value) {
//       if (root.left == null) {
//         root.left = node;
//       } else {
//         return this.insertNode(root.left, node);
//       }
//     } else {
//       if (root.right == null) {
//         root.right = node;
//       } else {
//         return this.insertNode(root.right, node);
//       }
//     }
//   }

//   inOrder(root) {
//     if (root) {
//       this.inOrder(root.left);
//       console.log(root.value);
//       this.inOrder(root.right);
//     }
//   }

//   levelOrder() {
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

//   height(root = this.root) {
//     if (!root) {
//       return -1;
//     }
//     let left = this.height(root.left);
//     let right = this.height(root.right);
//     return Math.max(left, right) + 1;
//   }

//   min(root = this.root) {
//     if (!root.left) {
//       return root.value;
//     }
//     return this.min(root.left);
//   }

//   search(root, value) {
//     if (!root) {
//       return false;
//     }else{
//         if(root.value == value){
//             return true
//         }else if(root.value>value){
//             return this.search(root.left, value)
//         }else{
//             return this.search(root.right, value)
//         }
//     }
//   }

//   findLarge(){
//     let arr = []
//     this.helper(this.root,arr)
//     return arr
//   }

//   helper(root, arr){
//     if(root){
//         this.helper(root.right, arr)
//         arr.push(root.value)
//         this.helper(root.left, arr)
//     }
//   }
// }

// const bst = new BST();

// bst.insert(23);
// bst.insert(233);
// bst.insert(234);

// // console.log(bst);
// // bst.inOrder(bst.root)
// // bst.levelOrder(bst.root)
// // console.log(bst.height());
// // console.log(bst.min());
// console.log(bst.search(bst.root, 233));
// console.log(bst.findLarge(bst.root));

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = []
//         }
//     }

//     addEdges(vertex1, vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addEdges(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addEdges(vertex2)
//         }
//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)
//     }

//     bfs(start){
//         const queue = [start]
//         const result = []
//         const visited = {}
//         visited[start] = true

//         while(queue.length){
//             let vertex = queue.shift()
//             result.push(vertex)

//             this.adjacencyList[vertex].forEach(element => {
//                 if(!visited[element]){
//                     queue.push(element)
//                     visited[element] = true
//                 }
//             });
//         }
//         return result
//     }

//     dfs(start){
//         const result = []
//         const visited = {}
//         const adjacencyList = this.adjacencyList;

//         function helper(vertex){
//             if(!vertex) return
//             result.push(vertex)
//             visited[vertex] = true

//             adjacencyList[vertex].forEach(element=>{
//                 if(!visited[element]){
//                     helper(element)
//                 }
//             })
//         }
//         helper(start)
//         return result
//     }
// }

// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("E")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")

// graph.addEdges("A","C")
// graph.addEdges("C","E")
// graph.addEdges("D","B")
// graph.addEdges("D","A")

// // console.log(graph.bfs("A"));
// console.log(graph.dfs("A"));

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
//                 currentNode.children[char] = new Node()
//             }
//             currentNode = currentNode.children[char]
//         }
//         currentNode.endWord = true
//     }

//     search(word){
//         let currentNode = this.root
//         for(const char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char] = new Node()
//             }
//             currentNode = currentNode.children[char]
//         }
//         return currentNode.endWord
//     }

//     startWith(word){
//         for (const char of word) {
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return true
//     }

//     autoComplete(word){
//         let currentNode = this.root
//         for (let char of word) {
//             if(!currentNode.children[char]){
//                 return []
//             }
//             currentNode = currentNode.children[char]
//         }
//         let list = []
//         this.collectWords(currentNode, word, list)
//         return list
//     }

//     collectWords(node, word, list){
//         if(node.endWord){
//             list.push(word)
//         }
//         for (let char in node.children) {
//             this.collectWords(node.children[char],word+char, list)
//         }
//     }

//     prefix(){
//         let currentNode = this.root
//         let prefix = ""
//         while(currentNode){
//             const keys = Object.keys(currentNode.children)
//             if(!currentNode.endWord){
//                 prefix+=keys[0]
//                 currentNode = currentNode.children[keys]
//             }else{
//                 break
//             }
//         }
//         return prefix
//     }
// }

// const trie = new Trie()

// trie.insert("appl")
// trie.insert("apples")
// trie.insert("applesss")

// // console.log(trie);
// console.log(trie.search("apple"));
// console.log(trie.autoComplete("a"));
// console.log(trie.prefix());

// class hashTable{
//    constructor(size){
//     this.table = new Array(size)
//    }

//    hash(key){
//       let hash = 0
//       for (let i = 0; i < key.length; i++) {
//          hash+=key.charCodeAt(i)
//       }
//       return hash%this.table.length
//    }

//    set(key,value){
//       const index = this.hash(key)
//       if(!this.table[index]){
//          this.table[index] = []
//       }
//       this.table[index].push([key,value])
//    }

//    get(key){
//       const index = this.hash(key)
//       return this.table[index]

//    }

//    print(){
//       for (let i = 0; i < this.table.length; i++) {
//          if(this.table[i]){
//             console.log(i,this.table[i]);

//          }
//       }
//    }

//    ermoveDuplicates(arr){
//       let hashtabl = new hashTable()
//       let result = []
//       for (let i = 0; i < arr.length; i++) {
//          if(!hashtabl[arr[i]]){
//             result.push(arr[i])
//             hashtabl[arr[i]] = true
//          }
//       }
//       return result
//    }
// }

// const table = new hashTable(10)
// table.set("one", 1)
// table.set("two", 2)
// table.set("two", 20)
// // table.print()
// // console.log(table.get("three"));
// console.log(table.ermoveDuplicates([2,2,4,4,3,5,6,7,4,5,6,8,9]));

// class Node{
//    constructor(value){
//       this.value = value
//       this.next = null
//    }
// }

// class LinkedList{
//    constructor(){
//       this.head = null
//       this.size = 0
//    }

//    isEmpty(){
//       return this.size ==0
//    }

//    insert(value){
//       const newNode = new Node(value)
//       if(this.isEmpty()){
//          this.head = newNode
//       }else{
//          newNode.next = this.head
//          this.head = newNode
//       }
//       this.size++
//    }

//    insertLast(value){
//       const newNode = new Node(value)
//       if(this.isEmpty()){
//          this.head = newNode
//       }else{
//          let current = this.head
//          while(current.next){
//             current = current.next
//          }
//          current.next = newNode
//       }
//       this.size++
//    }

//    reverse(){
//       let prev = null
//       let current = this.head
//       let next = null
//       while(current){
//          next = current.next
//          current.next = prev
//          prev = current
//          current = next
//       }
//       this.head = prev
//    }

//    removeMid(){
//       let fast = this.head
//       let slow = this.head
//       let prev = null
//       while(fast.next){
//          fast = fast.next.next
//          prev = slow
//          slow = slow.next
//       }
//       if(prev){
//          prev.next = slow.next
//       }
//       this.size--
//    }

//    circular(){
//       if(this.head==null){
//          return false
//       }
//       let current = this.head.next
//       while(current!=null&&current != this.head){
//          current = current.next
//       }
//       return current==this.head
//    }

//    removeDuplicates(){
//       if(this.isEmpty()){
//          return
//       }
//       let current = this.head
//       let setArray = new Set()
//       let prev = null
//       while(current){
//          if(setArray.has(current.value)){
//             prev.next = current.next
//             this.size--
//          }else{
//             setArray.add(current.value)
//             prev = current
//          }
//          current = current.next
//       }
//    }

//    removePosition(position){
//       let current = this.head
//       let prev = null
//       for (let i = 1; i < position; i++) {
//             prev = current
//             current = current.next
//       }
//       prev.next = current.next
//    }

//    print(){
//       let currentNode = this.head
//       while(currentNode){
//          console.log(currentNode.value);
//          currentNode = currentNode.next
//       }
//    }
// }

// const ll = new LinkedList()
// ll.insertLast(21)
// ll.insertLast(23)
// ll.insertLast(23)
// ll.insertLast(23)
// ll.insertLast(213)
// // ll.reverse()
// // ll.removeMid()
// ll.removeDuplicates()
// ll.print()
// // console.log(ll.circular());

// function addPrime(arr, i=0){
//    if(arr.length<=i){
//       return 0
//    }
//    if(check(arr[i])){
//       return arr[i]+=addPrime(arr,i+1)
//    }else{
//      return addPrime(arr,i+1)
//    }

// }

// function check(num){
//    let count = 0
//    for (let i = 0; i <= num; i++) {
//       if(num%i == 0){
//          count++
//       }
//    }
//    if(count==2){
//       return true
//    }
// }

// const arr = [3,1,6,8,7,9,5]
// console.log(addPrime(arr));

// const nums = [3,2,3,4,5,6]

// function fun(arr){
//    if(arr.length<1){
//       return 0
//    }
//    return arr[0]+=fun(arr.slice(1))
// }

// console.log(fun(nums));

// function fun1(n){
//    if(n<=1){
//       return n
//    }
//    return n+fun1(n-1)
// }
// console.log(fun1(5));

// function fun(n){
//    if(n<=1){
//       return n
//    }
//    return n*fun(n-1)
// }
// console.log(fun(5));

// function fun2(n){
//    if(n<=1){
//       return n
//    }
//    return fun2(n-1)+fun2(n-2)
// }
// console.log(fun2(6));

// function isPal(str, i=0,j = str.length-1){
//    if(i>j){
//       return true
//    }
//    if(str[i]!=str[j]){
//       return false
//    }else{
//       return isPal(str, i+1, j-1)
//    }
// }
// console.log(isPal("malaya3lam"));

// function binarySearch(arr, target){
//    let start = 0
//    let end = arr.length-1
//    while(start<=end){
//       const mid = Math.floor((start+end)/2)
//       if(arr[mid] == target){
//          return true
//       }else if(target>arr[mid]){
//          start = mid+1
//       }else{
//          end = mid-1
//       }
//    }
//    return false
// }

// console.log(binarySearch([2,4,5,8,9,12,34],34));

// function binarySearch(arr,target,start = 0, end = arr.length-1){
//    if(start>=end){
//       return false
//    }
//    const mid = Math.floor((start+end)/2)
//    if(arr[mid]==target){
//       return true
//    }else if(arr[mid]<target){
//       return binarySearch(arr,target,start = mid+1, end)
//    }else{
//       return binarySearch(arr,target,start, end=mid-1)
//    }
// }
// console.log(binarySearch([1,3,5,6,8,12,34,45,67],35));

// function quick(arr){
//    if(arr.length<=1){
//       return arr
//    }
//    let pivot = arr[0]
//    let left = []
//    let right = []
//    for (let i = 1; i < arr.length; i++) {
//       if(arr[i]<pivot){
//          left.push(arr[i])
//       }else{
//          right.push(arr[i])
//       }
//    }
//    return [...quick(left),pivot,...quick(right)]
// }
// console.log(quick([2,4,3,2,4,5,6,7,7,9]));

// function mergeSort(arr){
//    if(arr.length<=1){
//       return arr
//    }
//    const mid = Math.floor(arr.length/2)
//    const left = arr.slice(0,mid)
//    const right = arr.slice(mid)
//    return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left,right){
//    let result = []
//    while(left.length&&right.length){
//       if(left[0]<right[0]){
//          result.push(left.shift())
//       }else{
//          result.push(right.shift())
//       }
//    }
//    return [...result,...left,...right]
// }

// console.log(mergeSort([4,3,5,7,8,6,5,3,3]));

// class MinHeap{
//    constructor(){
//       this.heap = []
//    }

//    getParentInd(index){
//       return Math.floor(index-1)/2
//    }
//    getLeftChildInd(index){
//       return (index*2)+1
//    }
//    getRightChildInd(index){
//       return (index*2)+2
//    }
//    getParent(index){
//       return this.heap[this.getParetnInd(index)]
//    }
//    getleftChild(index){
//       return this.heap[this.getLeftChildInd(index)]
//    }
//    getRightChil(index){
//       return this.heap[this.getRightChildInd(index)]
//    }

//    swap(ind1, ind2){
//       [this.heap[ind1], this.heap[ind2]] = [this.heap[ind2], this.heap[ind1]]
//    }

//    insert(value){
//       this.heap.push(value)
//       this.heapifyUp()
//    }

//    heapifyUp(){
//       let currentIndex = this.heap.length-1
//       while(this.heap[currentIndex]<this.heap[this.getParent(index)]){
//          this.swap(currentIndex, this.heap[this.getParentInd(index)])
//          currentIndex = this.getParentInd(index)
//       }
//    }
// }

// function reverse(string){
//    if(string!=""){
//       return reverse(string.substr(1))+string.charAt(0)
//    }else{
//       return ""
//    }
// }
// console.log(reverse("vivek"));

// const arr = [4, 6, 3, 45, "45", { d: 5 }, "34"];
// function sum(arr) {
//   ans = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//       ans += arr[i];
//     } else if (typeof arr[i] == "string") {
//       ans += parseInt(arr[i]);
//     }else if(typeof arr[i] == "object"){
//         [i].forEach(val=>{
//             ans+=val
//         })
//     }
//   }
//   return ans
// }
// console.log(sum(arr));

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.top = null
//         this.size = 0
//     }

//     push(value){
//         const newNode = new Node(value)
//         if(this.top==null){
//             this.top = newNode
//         }else{
//             newNode.next = this.top
//             this.top = newNode
//         }
//     }

//     pop(){
//         this.top = this.pop.next
//     }
// }

// const ll = new LinkedList()

// ll.push(23)
// ll.push(223)
// ll.push(243)
// console.log(ll);

// const arr = [ 3,5,6,7]
// function add(arr,fun){
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(fun(arr[i]))
//     }
//     return result
// }

// function fun(num){
//     return num*2
// }

// console.log(add(arr,fun));

// function People(name, email){
//     this.name = name
//     this.email = email

// }

// People.prototype.hi = function (){
//     console.log(`hii ${this.name}`);
// }

// const hii = new People("vivek", "email.com")

// hii.hi()

// class People{
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }

// }

// const person = new People("vivek", "email.com")

// console.log(person.name);

// const arr = [3,6,0,2,0,7,0,9,0]
// function fun(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==0){
//             arr.splice(i,1)
//             arr.push(0)
//         }
//     }
//     return arr
// }
// console.log(fun(arr));

// const arr = [3, 6, 0, 2, 0, 7, 0, 9, 0];
// function fun() {
//   let ind = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != 0) {
//       arr[ind] = arr[i];
//       ind++;
//     }
//   }
//   for (let i = ind; i < arr.length; i++) {
//     arr[ind] = 0;
//   }
//   return arr;
// }
// console.log(fun(arr));

// const arr = [3, 6, 0, 2, 0, 7, 0, 9, 0];
// function fun(arr) {
//   let ind = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != 0) {
//       if (i !== ind) {
//         [arr[i], arr[ind]] = [arr[ind], arr[i]];
//       }
//       ind++;
//     }
//   }
//   return arr;
// }
// console.log(fun(arr));



// class Node{
//   constructor(value){
//     this.value = value
//     this.right = null
//     this.left = null
//   }
// }

// class BST{
//   constructor(){
//     this.root = null
//   }

//   isEmpty(){
//     return this.root == null
//   }

//   insert(value){
//     const newNode = new Node(value)
//     if(this.isEmpty()){
//       this.root = newNode
//     }else{
//       this.insertNode(newNode, this.root)
//     }
//   }

//   insertNode(node, root){
//     if(node.value < root.value){
//       if(root.left == null){
//         root.left = node
//       }else{
//         return this.insertNode(node,root.left)
//       }
//     }else{
//       if(root.right == null){
//         root.right = node
//       }else{
//         return this.insertNode(node,root.right)
//       }
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

//   findlarge(){
//     let arr = []
//     this.helper(this.root, arr)
//     return arr[0]
//   }

//   helper(root,arr){
//     if(!root){
//       return arr
//     }
//     this.helper(root.right,arr)
//     arr.push(root.value)
//     this.helper(root.left, arr)
//   }
// }

// const bst = new BST()
// bst.insert(223)
// bst.insert(233)
// bst.insert(23)
// bst.inOrder(bst.root)
// console.log(bst.min(bst.root));
// console.log(bst.findlarge(bst.root));


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
//     if(this.top == null){
//       this.top = newNode
//     }else{
//       newNode.next = this.top
//       this.top = newNode
//       this.size++
//     }
//   } 

//   pop(){
//     const removedVal = this.top
//     this.top = this.top.next
//     this.size--
//     return removedVal.value
//   }

//   print(){
//     let current = this.top
//     while(current){
//       console.log(current.value);
//       current = current.next
//     }
//   }
// }

// const stack = new Stack()
// stack.push(12)
// stack.push(142)
// stack.push(132)
// stack.print()


// const arr = [7,4,5,6,3,4]
// let large = 0
// let secondlarge = 0
// arr.reduce((acc,curr)=>{
//   if(curr>large){
//     secondlarge = large
//     large = curr
//   }else if(curr > secondlarge && curr!=large){
//     secondlarge = curr
//   }

// },0)

// console.log(large);
// console.log(secondlarge);



// function customHOC(arr,fun){
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//       result.push(fun(arr[i]))
//   }
//   return result
// }

// function fun(x){
// return x*3
// }
// // const fun1 = fun()
// const ans = customHOC([2,5,3,1,4,7],fun)

// console.log(ans);




