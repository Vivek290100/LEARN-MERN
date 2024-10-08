
function fun1() {
  let val = 10;

  function fun2() {
    console.log(val);
  }
  return fun2;
}

fun1();
