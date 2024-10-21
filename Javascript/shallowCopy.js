// shallow copy
const obj = {
  name:"vivek",
  email:"@mail.com",
  place:{
    place1:"place11",
    place2:"place12"
  }
}

const copy = {...obj}

copy.name = "vvvvvvvvvvv"
copy.place.place1 = "*********"

console.log(obj.name);
console.log(obj.place.place1);
