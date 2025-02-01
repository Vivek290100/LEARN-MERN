let array = []
let count = 0

while(count < 10){
    let first = count*2+1
    let second = first+1

    array[array.length] = first
    array[array.length] = second
    array[array.length] = second
    array[array.length] = first
    count++
}
console.log(array);



// const arr = [
//   {
//     a: 3,
//     adf: { l: [3, 23, 423, 5] },
//   },
//   {
//     a: 3,
//     adf: { l: [3, 23, 423, 5] },
//   },
//   {
//     a: 3,
//     adf: { l: [3, 23, 423, 5] },
//   },
// ];

// function sum(arr, i = 0) {
//   if (arr.length <= i) {
//     return 0;
//   }
//   return check(arr[i]) + sum(arr, i + 1);
// }

// function check(num) {
//   let total = 0;
//   if (num) {
//     total += num.a;
//     total += num.adf.l.reduce((acc, curr) => acc + curr, 0);
//   }
//   return total;
// }

// console.log(sum(arr));


