// import React from 'react'


// const Authenticated = true
// const Hoc = (Component) => {
//   return function () {
//     if(!Authenticated){
//         return <div>User is not authenticated</div>
//     }
//     return <Component/>
//   }
// }

// export default Hoc


const isAuthenticated = true
const Hoc = (Component) => {
  return function (){
    if(!isAuthenticated){
      return <h1>not authenticated </h1>
    }
    return <Component/>
  }

}

export default Hoc