import React from 'react'


const Authenticated = true
const Hoc = (Component) => {
  return function () {
    if(!Authenticated){
        return <div>User is not authenticated</div>
    }
    return <Component/>
  }
}

export default Hoc