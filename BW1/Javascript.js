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
function findLargeSubstring(str){
  let ans = ""
  for (let i = 0; i < str.length; i++) {
    let string = ""
    while(str[i]==str[i+1]){
      string+=str[i]
      i++
    }
    if(string.length>ans.length){
      ans = string+str[i]
    }
  }
  return ans
}
console.log(findLargeSubstring("qweeeeeertyyyyyyyyuuu"));
