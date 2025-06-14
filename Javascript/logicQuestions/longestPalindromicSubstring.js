
function palindrome(string){
  let start = 0
  let end = string.length-1
  while(start<end){
    if (string[start] !== string[end]){
      return false
    }
    start++
    end--
  }
  return true
}

function longestSubStr(str){
  let longest = ""
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j <= str.length; j++) {
      const substring = str.slice(i,j)
      if(palindrome(substring) && substring.length > longest.length){
        longest = substring
      }
    }
    
  }
  return longest
}

console.log(longestSubStr("dsasabccbaasd"));
