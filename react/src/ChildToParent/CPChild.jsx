// import React from 'react'

// const CPChild = ({sendData}) => {
//   const mesage = "hello"
//   const send = () =>{
//     sendData(mesage)
//   }
//   return (
//     <div>
//       <button onClick={send}>click to send</button>
//     </div>
//   )
// }

// export default CPChild

import React, { useState } from 'react'

const CPChild = ({message}) => {
  const [data, setData] = useState("")
  const set = () =>{
    setData(message)
  }
  return (
    <button onClick={set}>CPChild:{data}</button>
  )
}

export default CPChild