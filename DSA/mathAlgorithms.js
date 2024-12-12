// Prime number
// const arr = [1,5,3,2,9,7,6,4,59,77,11,2,4]
// const prime = []
// for(i=0;i<arr.length;i++){
//     let isPrime = true
//     if(arr[i]<2){
//         continue
//     }
//     for(j=2;j<arr[i];j++){
//         if(arr[i]%j==0){
//             isPrime = false
//             break
//         }
//     }
//     if(isPrime){
//         prime.push(arr[i])
//     }
// }
// console.log(prime);

//large secondLarge=============================================
// const arr = [23,45,56,67,87,100]
// let large = 0
// let secondLarge = 0

// for(i=0;i<arr.length;i++){
//     if(arr[i]>large){
//         secondLarge = large
//         large = arr[i]
//     }
// }
// console.log(large);
// console.log(secondLarge);

// third large=====================================================
// const array = [3,6,4,5,7,0]
// let large = 0
// let second = 0
// let third = 0
// for(i=0;i<array.length;i++){
//     if(array[i]>large){
//         third = second
//         second = large
//         large = array[i]
//     }else if(array[i]>second){
//         third = second
//         second = array[i]
//     }else if(array[i]>third){
//         third = array[i]
//     }
// }
// console.log(large);
// console.log(second);
// console.log(third);

//sum od n numbers=============================================
// function sum(n){
//     if(n<1){
//         return n
//     }
//     return n+sum(n-1)
// }

// console.log(sum(5));

//factorial===================================================
// function factorial(n){
//     if(n<=1){
//         return n
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5));

//fibonacci====================================================
// function fibonacci(n){
//     if(n<=1){
//         return n
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(7));

//reverse String=================================================
// function reverse(string){
//     if(!string == ""){
//         return reverse(string.substr(1))+(string.charAt(0))
//     }else{
//         return ""
//     }
// }

// console.log(reverse("Ashwin"));

// const array =[1,2,4,6,8,9,10,11,13]

// palindrome======================================================
// function isPal(str,i=0,j = str.length-1){
//     if(i > j){
//        return true
//     }
//     if(str[i] !== str[j]){
//         return false
//     }else{
//        return isPal(str,i+1,j-1)
//     }
// }

// console.log(isPal('malayalam'));

// // sum primes using recursion======================================
// function sumPrime(arr){
//     if(arr.length<1){
//       return 0
//     }
//     if(isPrime(arr[0])){
//       return arr[0]+sumPrime(arr.slice(1))
//     }
//     return sumPrime(arr.slice(1))
//   }

//   function isPrime(num){
//       let count = 0
//       for (let i = 1; i <= num; i++) {
//           if(num%i==0){
//               count++
//             }
//         }
//         if(count==2){
//             return true
//         }
//     }
//     console.log(sumPrime([1,2,3,4,5]));

//   sum even numbers========================================
// function evenSum(arr){
//     if(arr.length<1){
//         return 0
//     }
//     if(even(arr[0])){
//         return arr[0]+evenSum(arr.slice(1))
//     }
//     return evenSum(arr.slice(1))
// }

// function even(num){
//     if(num%2==1){
//         return false
//     }
//     return true
// }

// console.log(evenSum([1,2,3,4,5,6,6,7,8,9]));

// largest using reduce==========================================
// const arr = [76,23,45,6,45,32,56,5]

// const ans = arr.reduce((acc,curr)=>{
//     if(acc>curr){
//         return acc
//     }else{
//         return curr
//     }
// })

// console.log(ans);

// print pattern 12213443566578879
// const arr = []
// let count = 0

// while(count<10){
//     let one = (count*2)+1
//     let two = one+1
//     arr[arr.length] = one
//     arr[arr.length] = two
//     arr[arr.length] = two
//     arr[arr.length] = one
//     count++
// }
// console.log(arr);

// reverse array along with elements
// const arr = [123, 543, 765, 2345];

// function reverse(arr) {
//   const result = [];
//   for (let i = arr.length-1; i >= 0; i--) {
//     let reverseNum = 0;
//     let num = arr[i];
//     while(num>0){
//         let remainder = num%10
//         reverseNum = (reverseNum*10)+remainder
//         num = Math.floor(num/10)
//     }
//     result.push(reverseNum)
//   }
//   return result
// }

// console.log(reverse(arr));

// find longest substring
// const str = "qwwwwweeerrrttttttttttyyyyuuuiiiiiioertew"
// function findLong(str){
//     let result = ""
//     for (let i = 0; i < str.length; i++) {
//         let count = 1
//         let string = ""
//         while(str[i]==str[i+1]){
//             count++
//             string+=str[i]
//             i++
//         }
//         if(result.length<count){
//             result = string+str[i]
//         }
//     }
//     return result
// }
// console.log(findLong(str));

// find second longest substring
// function findSecond(str) {
//   let firstLong = 0
//   let secondLong = 0
//   for (let i = 0; i < str.length; i++) {
//     let count = 1
//     while(str[i]==str[i+1]){
//         count++
//         i++
//     }
//     if(count>firstLong){
//         secondLong = firstLong
//         firstLong = count
//     }else if(count>secondLong){
//         secondLong = count
//     }
//   }
//   return secondLong,firstLong;
// }
// console.log(findSecond("qwereeetttttoiuiytrtrreuyoipoi"));

// anagram
// const a = "mango"
// const b = "man"
// function anagram(a,b){
//     let is = true
//     for (let i = 0; i < b.length; i++) {
//         if(a.indexOf(b[i])==-1){
//             is = false
//         }
//     }
//     return is
// }
// console.log(anagram(a,b));


// sum
// const arr = [4, 6, 3, 45, "45", { d: 5 }, "34"];
// function sum(arr) {
//   ans = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//       ans += arr[i];
//     } else if (typeof arr[i] == "string") {
//       ans += parseInt(arr[i]);
//     }else if(typeof arr[i] == "object"){
//         [i].forEach(val=>{
//             ans+=val
//         })
//     }
//   }
//   return ans
// }
// console.log(sum(arr));



// function sum(n){
//     if(n<=1){
//       return n%2==0
//     }
    
//     if(n%2==0){
//       return n+sum(n-1)
//     }
//     return sum(n-1)
//   }
  
//   console.log(sum(5));




