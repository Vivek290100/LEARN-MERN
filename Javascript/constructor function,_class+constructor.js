// class+constructor
// class people{
//   constructor(name,email){
//     this.name = name
//     this.email = email
//   }
// }

// const employee = new people("vivek","vivek@gmail")

// console.log(employee.name);




// constructor function
function People(name,email){
    this.name = name
    this.email = email
  }
  
  People.prototype.sayhi=function (){
      console.log(`Hi ${this.name}`);
  }
  
  const me = new People("vivek", "email.com")
  
  me.sayhi()
  
  
  
  