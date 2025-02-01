// const object = {
//     name:"name123",
//     email:"email123"
// }
// console.log(object);// { name: 'name123', email: 'email123' }
// delete object.email
// console.log(object);// { name: 'name123' }

// =====================================================
// const object = {
//     name:"name123",
//     email:"email123"
// }
// for(key in object){
//     console.log(`${key}:${object[key]}`);
    
// }

// =====================================================

// obj_destructuring
// const object = {
//     name: 'vivek',
//     lastnamae: 'V'
// }

// const {name,lastnamae} = object
// console.log(name,lastnamae);

// ======================================================

// let myObject = {
//     a: 10,
//     b: 20,
//     c: "hello",
//     d: 30,
//     e: "world",
//     f: 40
// };

// let sum = 0
// for(let obj in myObject){
//     if(typeof (myObject[obj]) === "number"){

//         sum+= myObject[obj]
//     }
// }
// console.log(sum);


// let sum = 0
// for(let obj of Object.values(myObject)){
//     if (typeof obj == "number") {
//         sum+=obj
//     }
// }
// console.log(sum);


// =========================================================
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
// let sum = 0
//     ba.forEach(element => {
//      sum += element.a
//      sum += element.adf.l.reduce((acc,curr)=>acc+curr)
// });

// console.log(sum);
// =============================================================




// const obj = {
//     a:4,
//     b:5,
//     c:8
// }

// const arr = Object.entries(obj)
// console.log(arr);
// ====================================================

// const obj ={
//     name1: "vivek1",
//     name2: "vivek2",
//     name3: "vivek3"
// }




// const {name1} = obj
// console.log(name1);

// ===================================================
// Oblect.seal
// const obj = {
//     name:"vivek",
//     email: "@.com"
// }

// Object.seal(obj)

// obj.name = "vivekvivek"

// console.log(obj);

// ===================================================
// Oblect.freez
// const obj = {
//     name:"vivek",
//     email: "@.com"
// }

// Object.freeze(obj)

// obj.name = "vivekvivek"

// console.log(obj);


//========================================================
// Reflect.get
// const obj = {
//     name: "vivek", 
//     email: "@gmail.com"
// }

// Reflect.set(obj, "initial", "v")
// console.log(obj);

// console.log(Reflect.get(obj, "name"));



// =============================================
// possible ways to create a object 
// 1.object litral - normal object creation using {}
// const obj = {
//     name:"vivek"
// }

//===============================================
// 2.Object Constructor
// const obj = new Object()
// obj.key1 = "value1"
// obj.key2 = "value2"
// console.log(obj);

// ==============================================
// 3.constructor function  ->this,new
// function obj(key){
//     this.key = key
// }
// const newObj = new obj("value1")
// console.log(newObj);

// ============================================
// factory function ->no this, new
// function obj(key){
//     return {key}
// }
// const newObj = obj("value1")
// console.log(newObj);

// ============================================
// ES6 Classes
// class obj{
//     constructor(key){
//         this.key = key
//     }
// }
// const newObj = new obj("value1")
// console.log(newObj);


// Prototype chaining -
`Every object in JavaScript has an internal link to another object, called its prototype.
when an object does not have a property or method,js look for it in objsct's prototype.
if it is not fount then continue the prototype chain untill null`
// function Person(name){
//     this.name = name
// }

// Person.prototype.sayHi = function(){
//     console.log(`hiii ${this.name}`);
    
// }

// const hii = new Person("vivek")
// hii.sayHi()
// const hiiw = new Person("vivek1")
// hiiw.sayHi()



// const jsonData = `{
//     "name":"vivek",
//     "cabin":5,
//     "email":"email.com"
// }`;
// const parsedObj = JSON.parse(jsonData)//json to object
// console.log(parsedObj);


// const jsonData = {
//     name:"vivek",
//     cabin:5,
//     email:"email.com"
// };
// const parsedObj = JSON.stringify(jsonData)//object to json
// console.log(parsedObj);



// const obj = new Map()//key value pair
// obj.set(1,0)
// obj.set({name:'vivek'},"person")
// obj.set({4:"er"},"val")
// console.log(obj);


// const obj = new Set()//add any datatypes as values not key value pair
// obj.add(4)
// obj.add("t")
// obj.add({name:"vivek"})
// obj.add([3,5,6,8])
// console.log(obj);


// const obj= {
//     a:"2",
//     b:"3",
//     c:"4",
// }
// for (const key in obj) {
//     console.log(obj[key]);
    
// }



const ba = [
  {
    a: 3,
    adf: { l: [3, 23, 423, 5] },
  },
  { 
    a: 3, 
    adf: { l: [3, 23, 423, 5] } 
  },
  { 
    a: 3, 
    adf: { l: [3, 23, 423, 5] } 
  },
];

let total = 0