// function factorial(n){
//   if(n<=1){
//     return n
//   }
//   return n*factorial(n-1)
// }
// console.log(factorial(5));


// function sum(n){
//   if(n<=1){
//     return n
//   }
//   return n+sum(n-1)
// }
// console.log(sum(5));


// function fibonacci(n){
//   if(n<=1){
//     return n
//   }
//   return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(5));

// function primeNum(num){
//   let count = 0
//   for (let i = 1; i <= num; i++) {
//     if(num%i==0){
//       count++
//     }
//   }
//   if(count == 2){
//     return true
//   }else{
//     return false
//   }
// }

// function prime(arr){
//   const ans = []
//   for (let i = 0; i < arr.length; i++) {
//     if(primeNum(arr[i])){
//       ans.push(arr[i])
//     }
//   }
//   return ans
// }

// console.log(prime([1,2,3,4,5,6,7,8,9]));

// function sumOfNNumbers(arr){
//   if(arr.length<1){
//     return 0
//   }
//   return  arr[0]+sumOfNNumbers(arr.slice(1))
// }
// console.log(sumOfNNumbers([1,2,3,4,5]));


// function evenSum(arr){
//   if(arr.length<=0){
//     return 0
//   }
//   if(even(arr[0])){
//     return arr[0]+evenSum(arr.slice(1))
//   }else{
//     return evenSum(arr.slice(1))
//   }
// }

// function even(num){
//   if(num%2==0){
//     return num
//   }else{
//     return false
//   }
// }

// console.log(evenSum([1,2,3,4,5,6]));



// function removeDup(arr){
//   let unique = {}
//   let ans = []
//   for (let i = 0; i < arr.length; i++) {
//     if(!unique[arr[i]]){
//       unique[arr[i]] = true
//       ans.push(arr[i])
//     }
//   }
//   return ans
// }

// console.log(removeDup([1,1,2,2,3,4,5,6,6]));


// print pattern 12213443566578879
// function fun(){
//   let ans = []
//   let count = 0
//   while(count<10){
//     let one = (count*2)+1
//     let two = one+1
//     ans.push(one)
//     ans.push(two)
//     ans.push(two)
//     ans.push(one)
//     count++
//   }
//   return ans
// }
// console.log(fun());

// const arr = [123, 543, 765, 2345];
// function reverse(arr) {
// const ans = []
//   for (let i = arr.length-1; i >=0; i--) {
//     let reverseNum = 0
//     let num = arr[i]
//     while(num>0){
//       let mod = num%10
//       reverseNum = (reverseNum*10)+mod
//       num = Math.floor(num/10)
//     }
//     ans.push(reverseNum)
//   }
//   return ans
// }

// console.log(reverse(arr));


const str = "qwwwwweeerrrttyyyyabcuuuiiiioertew"
function longSub(str){
  let ans = ""
  for (let i = 0; i < str.length; i++) {
    let string = ""
    while(i+1<str.length && str.charCodeAt(i+1)==str.charCodeAt(i)+1){
      string+=str[i]
      i++
    }
    if(ans.length<string.length){
      ans = string+str[i]
    }
  }
  return ans
}

console.log(longSub(str));
