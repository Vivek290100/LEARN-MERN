// const arr = [3,4,3,23,23,34,45,3]
// const ans = arr.reduce((acc,curr)=>{
//     if(acc>curr){
//         return acc
//     }else{
//         return curr
//     }
// })

// console.log(ans);



// let arr = [1, 2, 3];
// let result = arr.flatMap(x => [x,x+2])
// console.log(result);

// const words = ["hello world", "foo bar"];
// const arr = []
// for (const sentence of words) {
//     arr.push(sentence.split(" "))
// }
// console.log(arr.flat());


// let num = 1232
// const num1 = num
// let ans = 0

// while(num>0){
//     let ans1 = num%10
//     ans = (ans*10)+ans1
//     num = Math.floor(num/10)
// }

// console.log(ans);


// const str = "qqwwwwwweertttty"
// let ans = ""
// for (let i = 0; i < str.length; i++) {
//     let string = ""
//     while(str[i]==str[i+1]){
//         string+=str[i]
//         i++
//     }

//     if(string.length>ans.length){
//         ans = string
//     }
// }
// console.log(ans);


// function findLongestConsecutiveAlphabet(str1){
//     let str = str1.toLowerCase()
//     let ans = ""
//     let string = str[0]
//     for (let i = 1; i < str.length; i++) {
//         if(str.charCodeAt(i) == str.charCodeAt(i-1)+1){
//             string+=str[i]
//         }else{
//             string = str[i]//start from begining
//         }
//         if(string.length>ans.length){
//             ans = string
//         }
//     }
//     return ans
// }
// console.log(findLongestConsecutiveAlphabet("abcmnopqrsTuvw123abCde"));



// const arr = []
// let num = 0
// while(num<=2){
//     let one = (num*2)+1
//     let two = one+1
//     arr[arr.length] = one
//     arr[arr.length] = two
//     arr[arr.length] = two
//     arr[arr.length] = one

//     num++
// }
// console.log(arr);


// const user = {
//     name: "vivek",
//     fun (){
//         console.log("its my name");
//     }
// }
// user.fun()




// longest palindrome
// const string = "trewerttttttrert"

// function palindrome(str){
//     let start = 0
//     let end = str.length-1
//     while(start<end){
//         if(str[start]!==str[end]){
//             return false
//         }
//         start++
//         end--
//     }
//     return true
// }

// function longestPalindrom(str){
//     let ans = ""
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i+1; j <= str.length; j++) {
//             let check = str.slice(i,j)
//             if(palindrome(check)&&(ans == "" || ans.length>check.length)){
//                 ans = check
//             }
//         }
//     }
//     return ans
// }
// console.log(longestPalindrom(string));


// const a = ["qwqwqw","qqw", "qeweqweqwe"]
// console.log(a.reduce((min, curr)=>{
//     return  curr.length < min.length ? curr : min

// }));


// nearest Palindrome
// function palindrome(str){
//     if(str==str.split("").reverse().join("")){
//         return true
//     }
// }

// function  nearestPalindrome(str){
//     const num = parseInt(str)
//     let less = num-1
//     let higher = num+1
//     while(true){
//         if(palindrome(less.toString())){
//             return less
//         }
//         if (palindrome(higher.toString())) {
//             return higher
//         }
//         less--
//         higher++
//     }
// }
// console.log(nearestPalindrome("123"));




// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// //IIFE for “capture” loop variables with var
// for (var i = 0; i < 3; i++) {
//     (function (j){
//         setTimeout(() => console.log(j), 100);
//     })(i)
// }

// // vs.
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }




// const arr = [0,3,7,0,2,5,0,7,9,0,6,0,9,0,8,0,7]
// function moveZeros(arr){
//     let ind = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]!=0){
//             arr[ind] = arr[i]
//             ind++
//         }
//     }
//     for (let i = ind; i < arr.length; i++) {
//         arr[i] = 0
        
//     }

//     return arr
// }
// console.log(moveZeros(arr));



// const parentheses = "[(){}]"
// function validParentheses(string){
//     const arr = []
//     for (let i of string) {
//         if(i == "("){
//             arr.push(")")
//         }else if(i == "{"){
//             arr.push("}")
//         }else if(i=="["){
//             arr.push("]")
//         }else{
//             if(arr.pop()!==i){
//                 return false
//             }
//         }
//     }
//     return arr.length === 0
// }
// console.log(validParentheses(parentheses));
    


// reverse array of integers
// const arr = [123,432,654,876]
// function reverse(arr){
//     const result = []
//     for (let i = arr.length-1; i >= 0; i--) {
//         let num = arr[i]
//         let ans = 0
//         while(num>0){
//             let quotient = num%10
//             ans = (ans*10)+quotient
//             num = Math.floor(num/10)
//         }
//         result.push(ans)
//     }
//     return result
// }
// console.log(reverse(arr));

// anagram
// function partialAnagram(a,b){
//     const count = {}
//     for (let ch of a) {
//         count[ch] = (count[ch] ||0)+1
//     }
//     for (const ch of b) {
//         if(!count[ch]){
//             return false
//         }
//         count[ch]--
//     }
//     return true
// }

// console.log(partialAnagram( "vivekhihello", "vekhiv"));


// [[2,12],[5,45],[67,4],[89,6],[23,8],[67,9]]
// const arr = [2,5,12,45,67,89,4,6,23,67,8,9]
// let ans = []
// for (let i = 0; i < arr.length; i+=4) {
//     ans.push([arr[i],arr[i+2]])
//     ans.push([arr[i+1],arr[i+3]])
// }
// console.log(ans);


