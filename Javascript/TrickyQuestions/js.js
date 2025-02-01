
// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// console.log({} + {});
// =============================================
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
// obj.a = 2;   
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
// console.log(obj[sym]); 
// console.log(obj.id);   
// // ============================================
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers.length);
// console.log(numbers[6]);
// // ============================================
// console.log({} == {});
// console.log([] == []);
// // ============================================
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



