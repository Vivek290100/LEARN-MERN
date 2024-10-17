import React from 'react'
import Child from './Child'

const Context = () => {

  const obj = {
    name:"vivek"
  }
  return (
    <div>
      <Child name={obj.name}/>
    </div>
  )
}

export default Context