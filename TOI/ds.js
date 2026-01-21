// function binarySearch(arr, target){
//   let start = 0
//   let end = arr.length-1
//   while(start<=end){
//     let mid = Math.floor((start+end)/2)
//     if(arr[mid]==target){
//       return true
//     }else if(arr[mid]<target){
//       start = mid+1
//     }else{
//       end = mid-1
//     }
//   }
//   return false
// }
const arr = [3,5,7,9,16,23,34,45,56,67]
console.log(binarySearch(arr,4));

function binarySearch(arr, target, start = 0, end = arr.length-1){
  if(start>end){
    return false
  }
  let mid = Math.floor((start+end)/2)
  if(arr[mid]==target){
    return true
  }else if(arr[mid]<target){
    return binarySearch(arr, target, mid+1, end)
  }else{
    return binarySearch(arr, target, start, mid-1)
  }
}

