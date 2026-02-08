// its a regular funtion that return an new object in each call
function fun(name){
    return {
        name:name,
        sayHi(){
            console.log(`name is ${name}`);
        
        }
    }
}
// const fun1 = fun("vivek")
// fun1.sayHi()

fun("vivek").sayHi()