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

const obj = {
  name: "vivek",
  email: "@gmail.com",
  place: {
    city: "calicut"
  }
}

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