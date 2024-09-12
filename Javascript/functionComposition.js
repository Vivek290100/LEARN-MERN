// combine two or more functions to create a new function. 

function one(x){
    return x+1
}

function two(x){
    return x*2
}

const result = one(two(2))
console.log(result);
    