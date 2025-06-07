// deep copy
const obj = {
    name:"vivek",
    email:'@gmail.com',
    place:{
      place1:"place11",
      place2:"place22"
    }
  }
  
  const copy = structuredClone(obj)
  // const copy = JSON.parse(JSON.stringify(obj))
  copy.name = "vvvvvvvv"
  copy.place.place1 = "*******"
  
  console.log(obj.name);          //not changed
  console.log(obj.place.place1);  //not changed
  
  