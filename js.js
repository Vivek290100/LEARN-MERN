// // BinarySearch O(log n)

// // function binarySearch(array,target){
// //   let start = 0
// //   let end = array.length-1

// //   while(start <= end){
// //       let mid = Math.floor((start+end)/2)
// //       if(array[mid]==target){
// //           return mid
// //       }else if(array[mid] < target){
// //           start = mid+1
// //       }else{
// //           end = mid-1
// //       }
// //   }
// //   return -1
// // }
// // console.log(binarySearch([1,2,4,5,6,8,9,10,40,200],200));




// // Using Recursion
// function binarySearchrec(arr,target,start = 0, end = arr.length-1){
//   if(start>end){
//       return false
//   }

//   let mid = Math.floor((start+end)/2)
//   if(arr[mid]==target){
//       return true
//   }
//   else if(arr[mid]<target){
//       return binarySearchrec(arr,target,mid+1,end)
//   }else{
//       return binarySearchrec(arr,target,start,mid-1)
//   }
// }


// console.log(binarySearchrec([2,3,4,5,6,8,9,12,19],8));



// function reverseDigitsAndAdd(number) {
//     const digits = []; 
  
//     while (number > 0) {
//       const lastDigit = number % 10;
//       digits.push(lastDigit);
//       number = Math.floor(number / 10); 
//     }
  
//     let sum = 0;
//     for (let i = digits.length - 1; i >= 0; i--) {
//       sum += digits[i];
//     }
  
//     return sum;
//   }
  
//   const number = [123,456];
//   const result = reverseDigitsAndAdd(number);
//   console.log(result);
  



const str = "my1 name7 is4 vivek2";

const string =str.split(" ")
string.sort((a,b)=>a[a.length-1]-b[b.length-1])
console.log(string);
