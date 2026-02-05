// const arr = [3,4,3,23,23,34,45,3]
// const ans = arr.reduce((acc,curr)=>{
//     if(acc>curr){
//         return acc
//     }else{
//         return curr
//     }
// })

// console.log(ans);



// let arr = [1, 2, 3];
// let result = arr.flatMap(x => [x,x+2])
// console.log(result);

// const words = ["hello world", "foo bar"];
// const arr = []
// for (const sentence of words) {
//     arr.push(sentence.split(" "))
// }
// console.log(arr.flat());


// let num = 1232
// const num1 = num
// let ans = 0

// while(num>0){
//     let ans1 = num%10
//     ans = (ans*10)+ans1
//     num = Math.floor(num/10)
// }

// console.log(ans);


// const str = "qqwwwwwweertttty"
// let ans = ""
// for (let i = 0; i < str.length; i++) {
//     let string = ""
//     while(str[i]==str[i+1]){
//         string+=str[i]
//         i++
//     }

//     if(string.length>ans.length){
//         ans = string
//     }
// }
// console.log(ans);


// function findLongestConsecutiveAlphabet(str1){
//     let str = str1.toLowerCase()
//     let ans = ""
//     let string = str[0]
//     for (let i = 1; i < str.length; i++) {
//         if(str.charCodeAt(i) == str.charCodeAt(i-1)+1){
//             string+=str[i]
//         }else{
//             string = str[i]//start from begining
//         }
//         if(string.length>ans.length){
//             ans = string
//         }
//     }
//     return ans
// }
// console.log(findLongestConsecutiveAlphabet("abcmnopqrsTuvw123abCde"));



// const arr = []
// let num = 0
// while(num<=2){
//     let one = (num*2)+1
//     let two = one+1
//     arr[arr.length] = one
//     arr[arr.length] = two
//     arr[arr.length] = two
//     arr[arr.length] = one

//     num++
// }
// console.log(arr);


// const user = {
//     name: "vivek",
//     fun (){
//         console.log("its my name");
//     }
// }
// user.fun()




// longest palindrome
// const string = "trewerttttttrert"

// function palindrome(str){
//     let start = 0
//     let end = str.length-1
//     while(start<end){
//         if(str[start]!==str[end]){
//             return false
//         }
//         start++
//         end--
//     }
//     return true
// }

// function longestPalindrom(str){
//     let ans = ""
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i+1; j <= str.length; j++) {
//             let check = str.slice(i,j)
//             if(palindrome(check)&&(ans == "" || ans.length>check.length)){
//                 ans = check
//             }
//         }
//     }
//     return ans
// }
// console.log(longestPalindrom(string));


// const a = ["qwqwqw","qqw", "qeweqweqwe"]
// console.log(a.reduce((min, curr)=>{
//     return  curr.length < min.length ? curr : min

// }));


// nearest Palindrome
// function palindrome(str){
//     if(str==str.split("").reverse().join("")){
//         return true
//     }
// }

// function  nearestPalindrome(str){
//     const num = parseInt(str)
//     let less = num-1
//     let higher = num+1
//     while(true){
//         if(palindrome(less.toString())){
//             return less
//         }
//         if (palindrome(higher.toString())) {
//             return higher
//         }
//         less--
//         higher++
//     }
// }
// console.log(nearestPalindrome("123"));




// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// //IIFE for “capture” loop variables with var
// for (var i = 0; i < 3; i++) {
//     (function (j){
//         setTimeout(() => console.log(j), 100);
//     })(i)
// }

// // vs.
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }




// const arr = [0,3,7,0,2,5,0,7,9,0,6,0,9,0,8,0,7]
// function moveZeros(arr){
//     let ind = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]!=0){
//             arr[ind] = arr[i]
//             ind++
//         }
//     }
//     for (let i = ind; i < arr.length; i++) {
//         arr[i] = 0

//     }

//     return arr
// }
// console.log(moveZeros(arr));



// const parentheses = "[(){}]"
// function validParentheses(string){
//     const arr = []
//     for (let i of string) {
//         if(i == "("){
//             arr.push(")")
//         }else if(i == "{"){
//             arr.push("}")
//         }else if(i=="["){
//             arr.push("]")
//         }else{
//             if(arr.pop()!==i){
//                 return false
//             }
//         }
//     }
//     return arr.length === 0
// }
// console.log(validParentheses(parentheses));



// reverse array of integers
// const arr = [123,432,654,876]
// function reverse(arr){
//     const result = []
//     for (let i = arr.length-1; i >= 0; i--) {
//         let num = arr[i]
//         let ans = 0
//         while(num>0){
//             let quotient = num%10
//             ans = (ans*10)+quotient
//             num = Math.floor(num/10)
//         }
//         result.push(ans)
//     }
//     return result
// }
// console.log(reverse(arr));

// anagram
// function partialAnagram(a,b){
//     const count = {}
//     for (let ch of a) {
//         count[ch] = (count[ch] ||0)+1
//     }
//     for (const ch of b) {
//         if(!count[ch]){
//             return false
//         }
//         count[ch]--
//     }
//     return true
// }

// console.log(partialAnagram( "vivekhihello", "vekhiv"));


// [[2,12],[5,45],[67,4],[89,6],[23,8],[67,9]]
// const arr = [2,5,12,45,67,89,4,6,23,67,8,9]
// let ans = []
// for (let i = 0; i < arr.length; i+=4) {
//     ans.push([arr[i],arr[i+2]])
//     ans.push([arr[i+1],arr[i+3]])
// }
// console.log(ans);


// function groupBy(items, key) {
//       return items.reduce((result, item) => {
//     const groupKey = item[key] || "unknown";

//     if (!result[groupKey]) {
//       result[groupKey] = [];
//     }

//     result[groupKey].push(item);
//     return result;
//   }, {});
// }
// const data = [

//   { user: "Ava", role: "admin" },

//   { user: "Ben", role: "user" },

//   { user: "Cara", role: "admin" },

//   { user: "Dan", role: "user" },

//   { user: "Eve" }, 

// ];


// console.log(groupBy(data, "role"));



// function binarySearch(arr,target){
//   let start = 0
//   let end = arr.length-1
//   while(start<=end){
//     let mid = Math.floor((start+end)/2)
//     if(arr[mid] == target){
//       return true
//     }else if(arr[mid]<target){
//       start = mid+1
//     }else{
//       end = mid-1
//     }
//   }
//   return false
// }
// console.log(binarySearch([1,2,4,5,6,8,9,10,40,200],2800));


// function binarySearchRecursion(arr, target, start = 0, end = arr.length-1, ){
//   if(start>end){
//     return false
//   }
//   let mid = Math.floor((start+end)/2)
//   if(arr[mid]==target){
//     return true
//   }else if(arr[mid]>target){
//     return binarySearchRecursion(arr, target, mid+1, end)
//   }else{
//     return binarySearchRecursion(arr,target, start, mid-1)
//   }
// }
// console.log(binarySearchRecursion([1,2,4,5,6,8,9,10,40,200],2800));


// class Node{
//   constructor(value){
//     this.value = value
//     this.left = null
//     this.right = null
//   }
// }

// class bst{
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
//       this.insertNode(this.root, newNode)
//     }
//   }

//   insertNode(root, newNode){
//     if(newNode.value<root.value){
//       if(root.left == null){
//         root.left = newNode
//       }else{
//         return this.insertNode(root.left, newNode)
//       }
//     }else{
//       if(root.right == null){
//         root.right = newNode
//       }else{
//         return this.insertNode(root.right, newNode)
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

//   search(root,value){
//     if(!root){
//       console.log(false);

//     }else{
//       if(root.value == value){
//       console.log(true);
//       }else if(root.value>value){
//         return this.search(root.left, value)
//       }else{
//         return this.search(root.right, value)
//       }
//     }
//   }

//   levelOrder(){
//     let arr = []
//     arr.push(this.root)
//     while(arr.length){
//       let curr = arr.shift()
//       console.log(curr.value);
//       if(curr.left){
//         arr.push(curr.left)
//       }
//       if(curr.right){
//         arr.push(curr.right)
//       }
//     }
//   }

//   min(root){
//     if(!root){
//       return "empty"
//     }else{
//       if(!root.left){
//         return root.value
//       }else{
//         return this.min(root.left)
//       }
//     }
//   }

//   height(root){
//     if(!root){
//       return 0
//     }
//     let left = this.height(root.left)
//     let right = this.height(root.right)
//     return Math.max(left,right)+1
//   }

//   secondLarge(){
//     let arr = []
//     this.helper(this.root, arr)
//     return arr[1]
//   }

//   helper(root, arr){
//     if(!root){
//       return arr
//     }else{
//       this.helper(root.right, arr)
//       arr.push(root.value)
//       this.helper(root.left, arr)
//     }
//   }
// }

// const BST = new bst()
// BST.insert(12)
// BST.insert(3)
// BST.insert(124)
// BST.insert(125)

// // BST.inOrder(BST.root)
// // BST.search(BST.root, 1122)
// // BST.levelOrder()
// // console.log(BST.min(BST.root));
// // console.log(BST.height(BST.root));
// console.log(BST.secondLarge(BST.root));


// class graph{
//   constructor(){
//     this.adjacancyList = {}
//   }

//   addVertex(vertex){
//     if(!this.adjacancyList[vertex]){
//       this.adjacancyList[vertex] = []
//     }
//   }

//   addEdges(vertex1, vertex2){
//     if(!this.adjacancyList[vertex1]){
//       this.addVertex(vertex1)
//     }
//     if(!this.adjacancyList[vertex2]){
//       this.addVertex(vertex2)
//     }
//     this.adjacancyList[vertex1].push(vertex2)
//     this.adjacancyList[vertex2].push(vertex1)
//   }

//   bfs(start){
//     const queue = [start]
//     const result = []
//     const visited = {}
//     visited[start] = true

//     while(queue.length){
//       let vertex = queue.shift()
//       result.push(vertex)

//       this.adjacancyList[vertex].forEach(element => {
//         if(!visited[element]){
//           queue.push(element)
//           visited[element] = true
//         }
//       });
//     }
//     return result
//   }

//   dfs(start){
//     const result = []
//     const visited = []
//     const adjacancyList = this.adjacancyList;

//     function dfshelper(vertex){
//       if(!vertex) return
//       result.push(vertex)
//       visited[vertex] = true

//       adjacancyList[vertex].forEach(neighor=>{
//         if(!visited[neighor]){
//           dfshelper(neighor)
//         }
//       })
//     }
//     dfshelper(start)
//     return result
//   }


//   detectCycle(start){
//     const visited = {}
//     const dfs = (vertex, parent)=>{
//       visited[vertex] = true
//       for(const neighbor of this.adjacancyList[vertex]){
//         if(!visited[neighbor]){
//           if(dfs(neighbor, vertex)){
//             return true
//           }
//         }else{
//           if(neighbor!==parent){
//             return true
//           }
//         }
//       }
//       return false
//     }
//     return dfs(start, null)
//   }

// }


// const grph = new graph()
// grph.addVertex("A")
// grph.addVertex("B")
// grph.addVertex("C")
// grph.addVertex("D")

// grph.addEdges("A","C")
// grph.addEdges("B","D")
// grph.addEdges("D","C")
// grph.addEdges("B","A")


// // console.log(grph.bfs("A"));
// // console.log(grph.dfs("A"));
// console.log(grph.detectCycle("A"));


// class Node{
//   constructor(){
//     this.children = {}
//     this.endword = false
//   }
// }


// class TRIE{
//   constructor(){
//     this.root = new Node()
//   }

//   insert(word){
//     let currentNode = this.root
//     for (const char of word) {
//       if(!currentNode.children[char]){
//         currentNode.children[char] = new Node()
//       }
//       currentNode = currentNode.children[char]
//     }
//     currentNode.endword = true
//   }

//   search(word){
//     let currentNode = this.root
//     for (const char of word) {
//       if(!currentNode.children[char]){
//         return false
//       }
//       currentNode = currentNode.children[char]
//     }
//     return currentNode.endword
//   }

//   startwith(word){
//     let currentNode = this.root
//     for (const char of word) {
//       if(!currentNode.children[char]){
//         return false
//       }
//       currentNode = currentNode.children[char]
//     }
//     return true
//   }

//   autoComplete(word){
//     let currentNode = this.root
//     for (let char of word) {
//       if(!currentNode.children[char]){
//         return []
//       }
//       currentNode = currentNode.children[char]
//     }
//     let list = []
//     this.collectwords(currentNode, word, list)
//     return list
//   }

//   collectwords(node, word, list){
//     if(node.endword){
//       list.push(word)
//     }
//     for (let char in node.children) {
//       this.collectwords(node.children[char], word+char, list)
//     }
//   }
// }

// const trie = new TRIE

// trie.insert("app")
// trie.insert("apple")
// trie.insert("apples")

// console.log(trie.search("app"));
// console.log(trie.startwith("a"));
// console.log(trie.autoComplete("a"));


// function quicksort(arr){
//   if(arr.length<=1){
//     return arr
//   }
//   const pivot = arr[0]
//   let left = []
//   let right = []

//   for(let i=1;i<arr.length;i++){
//     if(arr[i]<pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...quicksort(left),pivot,...quicksort(right)]
// }

// console.log(quicksort([2,5,1,4,3]));


// function mergeSort(arr){
//   if(arr.length<=1){
//     return arr
//   }

//   let mid = Math.floor(arr.length/2)
//   let left = arr.slice(0,mid)
//   let right = arr.slice(mid)

//   return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right){
//   let result = []
//   while(left.length&& right.length){
//     if(left[0]<=right[0]){
//       result.push(left.shift())
//     }else{
//       result.push(right.shift())
//     }
//   }
//   return [...result,...left,...right]
// }

// console.log(mergeSort([345,5,6,5434,352,346,346,132]));


// function bubble(arr){
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if(arr[j]>arr[j+1]){
//         [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//       }
//     }

//   }
//   return arr
// }
// console.log(bubble([345,5,6,5434,352,346,346,132]));

// function insertion(arr){
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j >=0; j--) {
//       if(arr[j]<arr[j-1]){
//         [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
//       }
//     }

//   }
//   return arr
// }
// console.log(insertion([345,5,6,5434,352,346,346,132]));

// function selection(arr){
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i
//     for (let j = i+1; j <arr.length; j++) {
//       if(arr[j]<arr[lowest]){
//         lowest = j
//       }
//     }
//     if(lowest!=i){
//       [arr[i],arr[lowest]] = [arr[lowest],arr[i]]
//     }
//   }
//   return arr
// }
// console.log(selection([345,5,6,5434,352,346,346,132]));



// function fun(num){
//     console.log(`${this.name}`,num);

// }

// const person = {
//     name:"vivek",
//     email:"vivek@"
// }

// const fun1 = fun.bind(person,4)
// fun1()

// console.log("hiii");

// =========================================================
// const promise = new Promise((resolve, reject)=>{
//     if(true){
//         resolve("resolved"),2000
//     console.log("tttttttttt");

//     }else{
//         reject("rejecteddd")
//     }

// })
// promise.then((result)=>{
//     console.log(result);

// }).catch((error=>{
//     console.log(error);

// }))


// async function getData(){
//     try {
//     const data = await promise
//     console.log("got it",data);
//     } catch (error) {
//         console.log("error",error);
//     }
// }
// getData()
// ==============================================

// const promise1 = new Promise((resolve, reject) => {
//     let test = false
//     setTimeout(() => {
//         if (test) {
//             resolve("resolved 1")
//         } else {
//             reject("rejected 1")
//         }
//     })
// })
// const promise2 = new Promise((resolve, reject) => {
//     let test = true

//     setTimeout(() => {
//         if (test) {
//             resolve("resolved 2")
//         } else {
//             reject("rejected 2")
//         }
//     }),3000
// })
// const promise3 = new Promise((resolve, reject) => {
//     let test = true

//     setTimeout(() => {
//         if (test) {
//             resolve("resolved 3")
//         } else {
//             reject("rejected 3")
//         }
//     })
// })


// Promise.all([promise1, promise2, promise3]).then((result) => {
//     console.log(result);

// }).catch((error)=>{
//     console.log(error);
    
// })
// Promise.any([promise1, promise2, promise3]).then((result) => {
//     console.log(result);

// }).catch((error)=>{
//     console.log(error);
    
// })
// Promise.race([promise1, promise2, promise3]).then((result) => {
//     console.log(result);

// }).catch((error)=>{
//     console.log(error);
    
// })
// Promise.allSettled([promise1, promise2, promise3]).then((result) => {
//     console.log(result);

// }).catch((error)=>{
//     console.log(error);
    
// })




// function fun1(callback){
//     return new Promise((callback)=>{
//         setTimeout(()=>{
//             console.log("function1");
//             callback()
//         },2000)
//     })
// }
// function fun2(){
//     return new Promise((callback)=>{
//         setTimeout(()=>{
//             console.log("function2");
//             callback()
//         },1000)
//     })
// }
// function fun3(){
//     return new Promise((callback)=>{
//         setTimeout(()=>{
//             console.log("function3");
//             callback()
//         },2000)
//     })
// }


// fun1().then(fun2).then(fun3).then(()=>{
//     console.log("all completed");
    
// })


// variable shadowing
// let i=10
// function fun(){
//     let i = 12
//     console.log(i);
// }
// fun()

// function fun(a,b){
//     function fun1(){
//        console.log(a,b);
       
//     }
//     return fun1
// }
// let ans = fun(4,5)
// ans()


// function fun1(a){
//     return function fun2(b){
//         return function fun3(c){
//             return   a+b+c
//         }
//     }
// }

// const ans = fun1(2)(3)(3)
// console.log(ans);

// function HOF(arr,fun){
//     const ans = []
//     for (let i = 0; i < arr.length; i++) {
//         ans.push(fun(arr[i]))
        
//     }
//     return ans
// }


// function fun(num){
//     return num*2
// }

// const ans = HOF([1,2,3,4,5,6],fun)
// console.log(ans);


// let x = 10; // Outer variable

// function example() {
//     let x = 20;
//     console.log(x); 
// }

// example();
// console.log(x); 

// const fs = require("fs")
// console.log("one");
// setTimeout(()=>{
//     console.log("two");
    
// })
// process.nextTick(()=>{
//     console.log("three");
    
// })
// setImmediate(()=>{
//     console.log("four");
    
// })
// const readFile = fs.readFileSync("js.txt","utf8")
// if(readFile){
//     console.log(readFile);
    
// }
// console.log("five");



// factory function
function sayHi(name, email){
    return {
        name:name,
        email:email,
        greet(){
            console.log(`hi${name}`);
            
        }
    }
}
sayHi("vivek","email.com").greet()
sayHi("vivek","email.com").greet()






