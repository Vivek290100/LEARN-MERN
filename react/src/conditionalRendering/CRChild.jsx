import React from 'react'

const CRChild = ({render}) => {
  return (
    <>
    <div>CRChild</div>
    {render?<div>success</div>: <div>failed</div>}
    </>
  )
}

export default CRChild