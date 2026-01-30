// import React, { useState } from 'react'
import CPChild from './CPChild'

// const CPParent = () => {
//   const [data,setdata] = useState("")
//   const getData = (data) =>{
//     setdata(data)
//   }
//   return (
//     <div>
//       <h1>message: {data}</h1>
//       <CPChild sendData = {getData}/>
//     </div>
//   )
// }

// export default CPParent

import React from 'react'

const CPParent = () => {
  const message = "this is a message"
  return (
    <div>
      <CPChild message={message}/>
    </div>
  )
}

export default CPParent