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







// handle promise using async/await
// const fetchData = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Data fetched"), 2000;
//   });
// });

// async function getData() {
//   const result = await fetchData;
//   console.log(result);
// }

// getData();

const getdata = new Promise((resolve, reject) => {
    const val = true;
    if (val) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  });
  
  async function getResut() {
    const data = await getdata;
    console.log("data", data);
    // return data xxxxxx
  }
  
  getResut();
  

  

