// 1. Function Declaration - A function declaration defines a named function. It can be called before it is defined because of hoisting.
// function name(myname){
//     return "hello" + myname
// }
// console.log(name("vivek"));


// 2. Function Expression - A function expression defines a function and assigns it to a variable. It’s not hoisted, so you must define it before calling it.
// const result = function name(myname){
//     console.log(myname);
// }
// result("vivek")


// 3. Arrow Functions - A shorter syntax introduced in ES6. Arrow functions do not have their own this, arguments, super, or new.target.
// const greet = (fun) =>{
//     return fun
// }
// console.log(greet("vivek"));



// 4. Immediately Invoked Function Expression (IIFE)
// (function(){
//     console.log("IIFE");
// })()



// 5. Function with Default Parameters
// function greet(name = "Vivek"){
//     console.log(`Hello, ${name}`);
// }
// greet()
// greet("V")



// 6. Rest Parameters - The rest parameter is denoted by three dots (...) followed by the name of the parameter
// function sum(...values){
//     return values.reduce((acc,curr)=>acc+curr, 0)
// }
// console.log(sum(1,4,2,5,7,8,6));



// 7. Function Scope and Closures -Function scope refers to the accessibility or visibility of variables defined within a function. In JavaScript, variables declared within a function are only accessible inside that function. This is known as local scope.
// function name(){
//     let myname = "vivek"
//     console.log( `hello${myname}`);
// }
// name()
// console.log(myname); //ReferenceError: myname is not defined



// 8. Callback Functions -A function passed into another function as an argument, which is then invoked inside the outer function.
// function greet(name,callback){
//     console.log(`hello ${"name"}`);
//     callback()  
// }

// function anotherfun(){
//     console.log("its callback");
    
// }
// greet("vivek", anotherfun)




// 9. Higher-Order Functions -A function that takes another function as an argument or returns a function.
// function greet(message){
//     return function (name){
//         return `${message} ${name}`
//     }
// }
// const hi = greet("hii")
// console.log(hi("vivek"));


// 10. Generator Functions- A function that can yield multiple values over time, using the yield keyword.
// function* generator(){
//     let i=0
//     while(i<5){
//         yield i++
//     }
// }
// const genfun = generator()
// console.log(genfun.next().value);
// console.log(genfun.next().value);
// console.log(genfun.next().value);
// console.log(genfun.next().value);


// 11. Async Functions -A function that returns a Promise, making asynchronous code easier to write and read.
// async function getDetails(){
//     const result = await fetch(api)
//     const data = await response.json()
//     return result
// }
// getDetails().then(data => console.log(data))

// 12. Anonymous Function - A function without a name, often used as an argument to other functions.
// const fun = function(){
//     return "hi"
// }
// console.log(fun());

// 13. Function Constructor
// first order function 
// first calss function 
// higher order function
// currying function 
// pure function
