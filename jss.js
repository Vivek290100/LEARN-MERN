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















