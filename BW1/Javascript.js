// deeplclone
// const obj = {
//     name: "vivek",
//     email: "@gmail.com",
//     place: {
//         city: "calicut"
//     }
// }

// method 1 with array
// const clone = (input) => {
//     if (input === null || typeof input !== "object") {
//         return input;
//     }
//     const initialValue = {};
//     return Object.keys(input).reduce((acc, key) => {
//         acc[key] = clone(input[key]);
//         return acc;
//     }, initialValue);
// };

// method 2 with plain object
// const clone = (input) =>{
//     if(input==null || typeof input !== "object"){
//         return input
//     }

//     const result = {}

//     for(key in input){
//         result[key] = clone(input[key])
//     }
//     return result
// }


// const copy = clone(obj)

// const copy = structuredClone(obj)

// const copy = JSON.parse(JSON.stringify(obj))

// const copy = {...obj}

// copy.place.city = "kochi"

// console.log(obj);
// console.log(copy);
// ====================================================================

// const ba = [
//   {
//     a: 3,
//     adf: { l: [3, 23, 423, 5] },
//   },
//   { 
//     a: 3, 
//     adf: { l: [3, 23, 423, 5] } 
//   },
//   { 
//     a: 3, 
//     adf: { l: [3, 23, 423, 5] } 
//   },
// ];


// // recursion-------
// function sum(arr,i=0){
//   if(arr.length <=i){
//     return 0
//   }
//   return check(arr[i])+sum(arr, i+1)
// }

// function check(a){
//   let total = 0
//   if(a){
//     total+=a.a 
//     total+=a.adf.l.reduce((acc, curr)=>{
//       return acc+curr
//     },0)
//   }
//   return total
// }

// console.log(sum(ba));


// for--------
// let sum = 0
// for (let i = 0; i < ba.length; i++) {
//   sum+=ba[i].a
//   sum+=ba[i].adf.l.reduce((acc,curr)=>acc+curr)

// }

// console.log(sum);


// reduce---------
// let sum = 0
// ba.forEach(element=>{
//     sum+=element.a
//     sum+=element.adf.l.reduce((acc,curr)=>{
//         return acc+curr
//     })
// })
// console.log(sum);

// ============================================================

// call apply bind
// function name(a,b){
//   console.log(this.name, a,b);

// }

// const obj = {
//   name: "vivek",
//   email: "@gmail.com",
//   place: {
//     city: "calicut"
//   }
// }

// const result = name.bind(obj,2,4)
// result()

// ==========================================================
// extract
// const {name, place:{city}} = obj
// console.log(name, city);
// ==========================================================

// const copy = structuredClone(obj)
// const copy = JSON.parse(JSON.stringify(obj))

// function clone(input){
//   if(input == null || typeof input !== "object"){
//     return input
//   }
//   const result = {}
//   for(let keys in input){
//     result[keys] = clone(input[keys])
//   }
//   return result
// }


// const copy = clone(obj)
// copy.place.city = "kochi"

// console.log(obj);
// console.log(copy);
// ===========================================================

// prototype chain, inheritance
// class Person{
//   constructor(name, email){
//     this.name = name
//     this.email = email
//   }

//   greet(){
//     console.log(this.name);

//   }
// }

// const employee = new Person("vivek", "@gmail.com")
// employee.greet()
// console.log(employee.name);



// function Person(name, email){
//   this.name = name
//   this.email = email
// }

// Person.prototype.greet = function(){
//   console.log(this.name);
// }

// const employee = new Person("vivek", "@gmail.com")
// employee.greet()
// console.log(employee.name);

// ====================================================
// factory function - regular fun that create and return new object each call
// function sayHi(name, email){
//   return {
//     name: name,
//     email: email,
//     greet(){
//       console.log(`Hi ${this.name}`);
//     }
//   }
// }

// const hi = sayHi("vivek", "@gmail.com")
// hi.greet()


// ============================
// pure function, impure
// function fun(a,b){
//   return a + b + Math.random();
// }

// console.log(fun(2,3));
// console.log(fun(2,3));

// ===============================
// function Person(name, email) {
//   this.name = name;
//   this.email = email;
//   this.greet = function () {
//     console.log(`Hi, I'm ${this.name}`);
//   };
// }

// const person1 = new Person("Vivek", "vivek@gmail.com");
// person1.greet(); 

// ================
// rest
// function fun(...arr){
//   return arr
// }

// console.log(fun(4,5,6,7,8,9,0));

// ======================================
// Promise scoping
// const a = 10
// new Promise((resolve)=>{
//    resolve(20)
// }).then((result)=>{
//   console.log(a+result);

// })

// ======================
// promise chaining - 1st outupt is input for 2nd
// const promise1 = new Promise((resolve,reject)=>{
//   resolve("promise1")
// })
// const promise2 = new Promise((resolve,reject)=>{
//   resorlve("promise2")
// })
// const promise3 = new Promise((resolve,reject)=>{
//   resolve("promise3")
// })

// promise1.then((result)=>{
//   console.log(result);
//   return promise2
// }).then((result)=>{
//   console.log(result);
//   return promise3
// }).then((result)=>{
//   console.log(result);
//   console.log("completed");

// }).catch((error)=>{
//   console.log(error);

// })


// ===============================================
// function findLargeSubstring(str){
//   let ans = ""
//   for (let i = 0; i < str.length; i++) {
//     let string = ""
//     while(str[i]==str[i+1]){
//       string+=str[i]
//       i++
//     }
//     if(string.length>ans.length){
//       ans = string+str[i]
//     }
//   }
//   return ans
// }
// console.log(findLargeSubstring("qweeeeeertyyyyyyyyuuu"));


// ==================================================
// const nestedArray = [
//   1,
//   [2, 3],
//   [4, [5, 6]],
//   [7, [8, [9, 10]]]
// ];

// function fun(arr){
//   let result = []
//     for (const element of arr) {
//       if(Array.isArray(element)){
//         result = result.concat(fun(element))
//       }else{
//         result.push(element)
//       }
//     }

//   return result
// }

// console.log(fun(nestedArray))

// ==========================================
// const arr = [3,3,2,2,2,3,4,5,5,6,7,7,8,8]
// function fun(arr){
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     let duplicate = false
//     for (let j = 0; j < result.length; j++) {
//       if(arr[i]==result[j]){
//         duplicate = true
//         break
//       }
//     }
//     if(!duplicate){
//       result.push(arr[i])
//     }

//   }
//   return result
// }
// console.log(fun(arr));

// =============================================
// const arr = [3, 3, 0, 0, 7, 0, 7, 8, 8]
// function fun(arr) {
//   let ind = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[ind] = arr[i]
//       ind++
//     }
//   }
//   for (let i = ind; i < arr.length; i++) {
//     arr[i] = 0
//   }
//   return arr

// }

// console.log(fun(arr));

// ==============================================

// const parantheses = "[{({[]})}]"
// const result = []
// function fun(parantheses) {
//   for (const i of parantheses) {
//     if (i == "{") {
//       result.push("}")
//     } else if (i == "[") {
//       result.push("]")
//     } else if (i == "(") {
//       result.push(")")
//     } else {
//       if(result.pop()!==i){
//         return false
//       }
//     }
//   }
//   return result.length == 0
// }

// console.log(fun(parantheses));

// ================================
// function palindrome(string){
//   let start = 0
//   let end = string.length-1
//   while(start<end){
//     if (string[start] !== string[end]){
//       return false
//     }
//     start++
//     end--
//   }
//   return true
// }

// function longestSubStr(str){
//   let longest = ""
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i+1; j <= str.length; j++) {
//       const substring = str.slice(i,j)
//       if(palindrome(substring) && substring.length > longest.length){
//         longest = substring
//       }
//     }
    
//   }
//   return longest
// }

// console.log(longestSubStr("dsasabccbaasd"));

// =====================================
// const arr = [2,3,4,5,6,7]
// function fun(arr, i=0){
//   if(i>=arr.length){
//     return 0
//   }
//   if(even(arr[i])){
//     return arr[i] + fun(arr, i + 1)
//   }else{
//     return fun(arr,i+1)
//   }
// }
// function even(a){
//   return a%2==0
// }

// console.log(fun(arr));

// class HashTable{
//   constructor(size){
//     this.table = new Array(size)
//   }

//   hash(key){
//     let hash = 0
//     for (let i = 0; i < key.length; i++) {
//       hash+=key.charCodeAt(i)
//     }
//     return hash%this.table.length
//   }

//   // set(key, value){
//   //   const index = this.hash(key)
//   //   this.table[index] = value
//   // }

//   set(key,value){
//     const index = this.hash(key)
//     if(!this.table[index]){
//       this.table[index] = []
//     }
//     this.table[index].push(key,value)
//   }

//   get(key){
//     const index = this.hash(key)
//     return this.table[index]
//   }
  
//   remove(key){
//     const index = this.hash(key)
//     this.table[index] = undefined
//   }

//   print(){
//     for (let i = 0; i < this.table.length; i++) {
//       if(this.table[i]){
//         console.log(i, this.table[i]);
        
//       }
//     }
//   }

// }

// const hashTable = new HashTable(10)
// hashTable.set("javascript", 123)
// hashTable.set("mongodb", 12345)
// hashTable.set("mongodb-database", 1234567)

// hashTable.print()
// // console.log(hashTable);

class Stack{
  constructor(){
    this.items = []
  }

  push(value){
    return this.items.push(value)
  }

  pop(){
    return this.items.pop()
  }

  reverse(string){
    const newStack = new Stack()
    
  }
}
