import React from 'react'
import {useName} from "./Context"
const Name = () => {
  const name = useName()
  return (
    <div>{name}</div>
  )
}

export default Name