function bubble(arr){
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}
console.log("bubble",bubble([3,5,1,2,3,4,6,9,7,6,4]));

function insertion(arr){
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}
console.log("insertion",insertion([7,5,3,1,2,4,6,8]));

function selection(arr){
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i+1; j<arr.length; j++) {
      if(arr[j]<arr[lowest]){
        lowest = j
      }
    }
    if(lowest!=i){
      [arr[i],arr[lowest]] = [arr[lowest],arr[i]]
    }
  }
  return arr
}

console.log("selection",selection([7,5,3,1,2,4,6,8]));
