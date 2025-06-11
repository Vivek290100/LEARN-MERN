import React from 'react'
import CRChild from './CRChild'

const CRParent = () => {
    const render = true
  return (
    <>
    <div>CRParent</div>
          <CRChild render={render} />
    </>
  )
}

export default CRParent