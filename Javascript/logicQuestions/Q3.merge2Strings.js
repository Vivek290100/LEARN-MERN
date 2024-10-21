const str1 = "--------";
const str2 = "********";

function merge(string1, string2) {
    let result = ""
  for (let i = 0; i < string1.length; i++) {
    if(i< string1.length+string2.length){
        result+=string1[i]+string2[i]
    }
  }
  return result
}

console.log(merge(str1,str2));

