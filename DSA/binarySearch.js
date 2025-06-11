// BinarySearch O(log n)

// function binarySearch(array,target){
//   let start = 0
//   let end = array.length-1

//   while(start <= end){
//       let mid = Math.floor((start+end)/2)
//       if(array[mid]==target){
//           return mid
//       }else if(array[mid] < target){
//           start = mid+1
//       }else{
//           end = mid-1
//       }
//   }
//   return -1
// }
// console.log(binarySearch([1,2,4,5,6,8,9,10,40,200],200));




// Using Recursion
function binarySearch(arr, target, start = 0, end = arr.length-1){
    if(start>end){
        return false
    }
    let mid = Math.floor((start+end)/2)
    if(arr[mid]==target){
        return true
    }else if(arr[mid]< target){
        return binarySearch(arr, target, mid+1, end)
    }else{
        return binarySearch(arr, target, start, mid-1)
    }
}

console.log(binarySearch([2,4,12,34,56,78],56));

  