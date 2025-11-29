// async function fetchWithLimit(urls, limit, retries) {
//   const results = new Array(urls.length); // to preserve order
//   let index = 0; // track which URL to fetch next

//   // Function to fetch a single URL with retry logic
//   async function fetchWithRetry(url, retriesLeft) {
//     try {
//       const res = await fetch(url);
//       if (!res.ok) throw new Error(`HTTP error ${res.status}`);
//       return await res.json();
//     } catch (err) {
//       if (retriesLeft > 0) {
//         // retry
//         return fetchWithRetry(url, retriesLeft - 1);
//       } else {
//         // all retries exhausted
//         return `Failed: ${err.message}`;
//       }
//     }
//   }

//   // Worker function to run until all URLs are processed
//   async function worker() {
//     while (index < urls.length) {
//       const currentIndex = index++;
//       const url = urls[currentIndex];
//       results[currentIndex] = await fetchWithRetry(url, retries);
//     }
//   }

//   // Run "limit" number of workers in parallel
//   const workers = Array.from({ length: limit }, worker);
//   await Promise.all(workers);

//   return results;
// }

// // Example usage:
// const urls = [
//   "https://jsonplaceholder.typicode.com/todos/1",
//   "https://jsonplaceholder.typicode.com/todos/2",
//   "https://jsonplaceholder.typicode.com/404", // invalid
// ];

// fetchWithLimit(urls, 1, 2).then(console.log);



const arr = [
  {id: 'asasd', name: 'Adsds', job: 'painter'},
  {id: 'sdsfsd', name: 'Bdsds', job: 'gynecologist'},
  {id: 'sscsdc', name: 'Cdsds', job: 'paleontology'},
  {id: 'rrvrva', name: 'Ddsds', job: 'dasdasd'},
  {id: 'mnuytv', name: 'Edsds', job: 'dasdasd'},
  {id: 'qwdcsdc', name: 'Fdsds', job: 'dasdasd'},
  {id: 'plmumer', name: 'Gdsds', job: 'dasdasd'}
];

const hashmap = arr.reduce((acc,obj)=>{
    acc[obj.id] = obj
    return acc
},{})

console.log(hashmap);
