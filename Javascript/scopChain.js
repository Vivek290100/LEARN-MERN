// interpreter looks for variables in different scopes.
//  first checks the current local scope, and if it is not found, it continues to check each outer (enclosing) scope until it reaches the global scope

let c = 30
function fun1(){
    let a = 10
    function fun2(){
        const b = 20
        console.log(a);
        console.log(b);
        console.log(c);
        
    }
    fun2()
}
fun1()