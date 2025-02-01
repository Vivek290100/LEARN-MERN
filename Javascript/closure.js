function fun1() {
  let val = 10;

  function fun2() {
    console.log(val);
  }
  return fun2;
}

const ans = fun1();
ans()


// variable shadowing
let i = 13
function  fun(){
  let i = 12//shadows the global i
  console.log(i);
}
fun()



function add(a,b){
  function sum(){
    console.log(a+b);
  }
  return sum
}

let answer = add(4,5)
let answer1 = add(4,0)
answer()
answer1()