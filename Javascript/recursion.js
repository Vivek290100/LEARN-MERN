

function duplicates(arr) {
    const frequency = {};

    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]] = (frequency[arr[i]]||0)+1
    }
    // return frequency

    return arr.filter(item => frequency[item] === 1);
}

console.log(duplicates([1, 2, 3, 4, 1, 2]));



// function add(ba){
//     let total = 0
//     ba.forEach(element => {
//         total+=element.a
//         total+=element.adf.l.reduce((acc,curr)=>acc+curr)
//     })
//     return total
// }



// function rec(arr, sum = 0, i = 0) {
//   if (i == arr.length) {
//     return sum;
//   }

//   sum += arr[i];
//   return rec(arr, sum, i + 1);
// }

// function addSum(list) {
//   let mainSum = 0;
//   for (const el of list) {
//     mainSum += rec([el.a])
//     mainSum += rec(el.adf.l);
//   }
//   return mainSum;
// }

// console.log(
//   addSum([
//     { a: 3, adf: { l: [3, 23, 423, 5] } },
//     { a: 3, adf: { l: [3, 23, 423, 5] } },
//     { a: 3, adf: { l: [3, 23, 423, 5] } },
//   ])
// );





function sum(list, index = 0, total = 0) {
    if (index === list.length) {
      return total;
    }
  
    total += list[index].a;
    total += sumArray(list[index].adf.l);
    return sum(list, index + 1, total);
  }
  function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(
    sum([
      { a: 3, adf: { l: [3, 23, 423, 5] } },
      { a: 3, adf: { l: [3, 23, 423, 5] } },
      { a: 3, adf: { l: [3, 23, 423, 5] } },
    ])
  );
  
 