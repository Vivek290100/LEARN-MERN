function fun1(a){
    return function fun2(b){
      return function fun3(c){
        return a+b+c
      }
    }
  }
  
  console.log(fun1(2)(3)(4));
  