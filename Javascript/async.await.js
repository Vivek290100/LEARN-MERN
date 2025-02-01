async function promise() {
  try {
    const somedata = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await somedata.json();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
}

promise();

async function asyncawait() {
  try {
    const urldata = await fatch("url");
    const data = await urldata.json();
    console.log(data);
  } catch (error) {}
}

asyncawait();




// handle promise using async and await 
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
// =================================================
// const getdata = new Promise((resolve, reject) => {
//     const val = true;
//     if (val) {
//       resolve("resolved");
//     } else {
//       reject("rejected");
//     }
//   });
  
//   async function getResut() {
//     const data = await getdata;
//     console.log("data", data);
//     // return data xxxxxx
//   }
  
//   getResut();
  
