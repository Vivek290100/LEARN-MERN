function customHOC(arr,fun){
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(fun(arr[i]))
    }
    return result
}

function fun(x){
 return x*3
}
// const fun1 = fun()
const ans = customHOC([2,5,3,1,4,7],fun)

console.log(ans);
