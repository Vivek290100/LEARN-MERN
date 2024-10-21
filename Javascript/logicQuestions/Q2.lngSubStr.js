
const str = "qwertyuittyuuuiop"

function findlong(str){
    let longest = ""
    for (let i = 0; i < str.length; i++) {
        let count = 1
        let string = ""
        while(str[i] == str[i+1]){
            count++
            string+=str[i]
            i++
        }
        
        if(count>longest.length){
            longest=string+str[i]
        } 
    }
    return longest
}

console.log(findlong(str));