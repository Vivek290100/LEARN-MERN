function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
console.log("bubble", bubble([3, 5, 1, 2, 3, 4, 6, 9, 7, 6, 4]));

function insertion(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
console.log("insertion", insertion([7, 5, 3, 1, 2, 4, 6, 8]));

function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (lowest != i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr
}

console.log("selection", selection([7, 5, 3, 1, 2, 4, 6, 8]));


function quick(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pivot = arr[0]
  let left = []
  let right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    }
    if (arr[i] < pivot) {
      left.push(arr[i])
    }
  }
  return [...quick(left), pivot, ...quick(right)]
}
console.log("quick", quick([5, 3, 7, 9, 0, 2, 3, 1, 4, 5, 8]));



function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
  let result = []
  while (left.length && right.length) {
    if(left[0]<=right[0]){
      result.push(left.shift())
    }else[
      result.push(right.shift())
    ]
  }
  return [...result,...left,...right]
}
let arr = [8,5,1,4,6,7,9,0,3,2,3,1,8,7,6,5,4,3,2,1]
let start = Math.floor(((arr.length-10)/2))
let end = start+10
 let middleElements = arr.slice(start,end)
 let sorted = mergeSort(middleElements)

 let result = [...arr.slice(0,start),...sorted,...arr.slice(end)]
console.log(result);
