// const arr = [19,3,8,5,3,1,5,7,9,6,30]
// const ans = arr.reduce((acc, curr)=>{
//     if(acc>curr){
//         return acc
//     }else{
//         return curr
//     }
// })
// console.log(ans);


// frequency using reduce 
// const arr = [45,45,3,4,3,3,2,1,2,3,4,5,6,67,7,6,6,56,5,5,5,5,4,4,4,4]
// const ans = arr.reduce((acc, curr)=>{
//     acc[curr] = (acc[curr])+1
//     return acc
// },{})

// console.log(ans);


// frequency using map
// const arr = [4,4,4,3,3,3,2,2,3,54,67,87,9,9,8,7,6,5,4,4]
// const map = {}
// for (let i = 0; i < arr.length; i++) {
//     const num = arr[i]
//     map[num] = (map[num]||0)+1
// }
// console.log(map);


// const arr = [3,4,3,2,2,3,4,5,6,7,7,8,8,8]
// const ans = arr.filter(num=> num%2 == 0)
// console.log(ans);



// const arr = [3,4,3,2,2,3,4,5,6,7,7,8,8,8]
// const ans = arr.map(num=>num+2)
// console.log(ans);


// const arr = [3,4,3,2,2,3,4,5,6,7,7,8,8,8]
// arr.forEach(num=>console.log(num+2)
// )




// const obj = {
//     name: "Vivek",

//     regular:function(){
//         console.log(this.name);

//     },

//     arrow:()=>{
//         console.log(this.name);
//     }
// }

// obj.regular()
// obj.arrow()



// const arraw = (value)=>{
//    return value
// }

// console.log(arraw(4));



// (function fun(){
//     console.log("hiiii");

// })()


// rest
// function fun( ...ans){
//     return ans
// }

// console.log(fun(3,4,2,2,2,2,3,4,4,5,5));


// call apply bind
// function fun(a,b){
//     console.log(this.name, a, b);
// }

// const obj = {
//     name: "Vivek",
//     email: "@gmail.com"
// }

// const fun1 = fun.bind(obj,3,4)
// fun1()



// callbackhell and solved with async and await
// function function1(){
//     return new Promise((resolve)=>{
//         console.log("function1 completed");
//         resolve()
//     })
// }
// function function2(){
//      return new Promise((resolve, reject)=>{
//         console.log("function1 Incompleted");
//         reject("error in 2")
//     })
// }
// function function3(){
//    return new Promise((resolve)=>{
//         console.log("function1 completed");
//         resolve()
//     })
// }


// async function runall(){
//     try{
//     await function1()
//     await function2()
//     await function3()
//     console.log("all conpleted");
//     }catch(error){
//         console.log("got an error",error);

//     }

// }

// runall()


// closure
// function fun(){
//     const a = 23
//     function fun1(){
//         console.log(a);

//     }
//     return fun1
// }

// const ans = fun()
// ans()



// currying - currying is the technique in js that 
// the function with multiple argument transformed into sequesnce of functions
// each taking single argument
// function fun1(a){
//     return function fun2(b){
//         return function fun3(c){
//             return a+b+c
//         }
//     }
// }

// console.log(fun1(3)(4)(3));


// customHOC
// function fun(arr, fun1){
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(fun1(arr[i]))

//     }
//     return result
// }

// function fun1(a){
//     return a+2
// }

// const ans = fun([2,3,4,5,6,7], fun1)
// console.log(ans);


// deepCopy and shallowCopy 






// function findLong(str){
//     let longestStr = ""
//     for (let i = 0; i < str.length; i++) {
//         let count = 1
//         let string = ""
//         while(str[i]==str[i+1]){
//             count++
//             string+=str[i]
//             i++
//         }

//         if(count>longestStr.length){
//             longestStr = string+str[i]
//         }
//     }
//     return longestStr
// }
// const str = "qwertyuittyuuuiop"

// console.log(findLong(str));





// const arr = [2, 3, 4, 5, 6, 7]
// function binarysearch(arr,) {

//     let mid = arr.lenth / 2
//     let start = arr[0]
//     let end = arr.length-1
//     if (arr[i]<mid[i]){
//         return 
//     }else{

//     }

// }

// const arr = [3,4,5,6,7,8]

// function sum(arr, i){
//     let sum = 0
//     if(arr.length <=1){
//         return 0
//     }

//     return  sum+=sum(add(arr,i++))
// }

// function add(arr){
//     for (let i = 0; i < arr.length; i++) {
//         return arr[i]
        
//     }
// }


// console.log(sum(arr));

