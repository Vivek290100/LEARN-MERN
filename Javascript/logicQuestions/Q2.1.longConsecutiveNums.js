const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10,11, 12, 13, 14, 15];

let array = [];
let checkArray = [];

for (let i = 0; i < arr.length; i++) {
  let count = 1;
  checkArray = [arr[i]];

  while (arr[i] === arr[i + 1]-1) {
    count++;
    checkArray.push(arr[i + 1]);
    i++;
  }

  if (checkArray.length > array.length) {
    array = [...checkArray];
  }
}

console.log(array);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
