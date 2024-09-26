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

const obj = {
    name: "vivek", 
    email: "@gmail.com"
}

Reflect.set(obj, "initial", "v")
console.log(obj);

console.log(Reflect.get(obj, "name"));


 