// function palindrome(str){
//     str = str.toLowerCase()
    
//     let left = 0
//     let right = str.length-1

//     while(left < right){
//         if(str[left]!==str[right]){
//             return "its not palindrome"
//         }
//         left++
//         right--
//     }
//     return 'palindrome'
    
// }

// console.log(palindrome("malayalam"));




//camelCase word
// function string(string){
//     return (string.toLowerCase().charAt(0).toUpperCase())+string.toLowerCase().substr(1)
// }
// console.log(string("vivEk"));


// camelCase sentence
function string(string){
    return string.toLowerCase().split(" ").map(word =>word.charAt(0).toUpperCase()+word.substr(1)).join(" ")
}
console.log(string("hi How aRe yoU"));



