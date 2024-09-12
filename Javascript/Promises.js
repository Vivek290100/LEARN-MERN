// Promise.all:        All must succeed to succeed; one fail means overall fail.
// Promise.any:        Any success means success; all fail means failure.
// Promise.race:       First to finish determines the result.
// Promise.allSettled: Wait for all to finish and get details on each.






//then, catch, finally
// const promise = new Promise((resolve,reject) =>{
//     let test = true

//     if(test){
//         resolve("success")
//     }else{
//         reject("reject")
//     }
// })

// promise.then(result =>{
//     console.log(result);
    
// }).catch(error=>{
//     console.log(error);
    
// }).finally(()=>{
//     console.log("completed");
    
// })

// ========================================
// const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'one'));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'two'));

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value); // "two"
// });



  

