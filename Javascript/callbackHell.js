// function firstFunction(callback) {
//     setTimeout(() => {
//       console.log('First function completed');
//       callback();
//     }, 1000);
//   }
  
//   function secondFunction(callback) {
//     setTimeout(() => {
//       console.log('Second function completed');
//       callback();
//     }, 1000);
//   }
  
//   function thirdFunction(callback) {
//     setTimeout(() => {
//       console.log('Third function completed');
//       callback();
//     }, 1000);
//   }
  
//   function fourthFunction(callback) {
//     setTimeout(() => {
//       console.log('Fourth function completed');
//       callback();
//     }, 1000);
//   }

//   function function4(callback){
//     setTimeout(()=>{
//         console.log("function4");
        
//         callback()
//     },2000)
//   }
  
//   firstFunction(() => {
//     secondFunction(() => {
//       thirdFunction(() => {
//         fourthFunction(() => {
//             function4(()=>{
//                 console.log('All functions completed');
//             })
//         });
//       });
//     });
//   });
  

  //async/await
//   function firstFunction() {
//     return new Promise((callback)=>{
//         setTimeout(() => {
//           console.log('First function completed');
//           callback();
//         }, 1000);
//     })
//   }
//   function secondFunction() {
//     return new Promise((callback)=>{
//         setTimeout(() => {
//           console.log('second function completed');
//           callback();
//         }, 1000);
//     })
//   }
//   function thirdFunction() {
//     return new Promise((callback)=>{
//         setTimeout(() => {
//           console.log('third function completed');
//           callback();
//         }, 1000);
//     })
//   }

//   firstFunction().then(secondFunction).then(thirdFunction).then(()=>{
//     console.log("all completed");
//   })





