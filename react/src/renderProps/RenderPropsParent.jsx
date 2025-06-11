import React from 'react'

const RenderPropsParent = ({children}) => {
    const data = "its a data"
  return (
    <>
    {children(data)}
    </>
  )
}

export default RenderPropsParent