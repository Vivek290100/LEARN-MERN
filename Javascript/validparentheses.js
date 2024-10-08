function validpar(parentheses){
    const array = []
    for(let i of parentheses){
        if(i == "{"){
            array.push("}")
        }else if(i =="["){
            array.push("]")
        }else if(i == "("){
            array.push(")")
        }else{
            if(array.pop()!==i){
                return false
            }
        }
    }
    return array.length === 0
}

console.log(validpar("[{[][]()}]"));
