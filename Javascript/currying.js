
function fun1(a){
    return function fun2(b){
        return function fun3(c){
            return ans = a+b+c
        }
    }
}

console.log(fun1(3)(5)(6))