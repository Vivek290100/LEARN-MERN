const obj = {
    name: "vivek",
    email: "email.com",
    obj1:{
        name1:"vvvvv"
    }
}
console.log(typeof obj);

console.log(typeof obj.obj1 === "object") //true
console.log(obj.obj1 instanceof Object)   //true