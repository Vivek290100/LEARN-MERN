// import React, { useState } from 'react'
// import Child from './CPChild'

// const CPParent = () => {
//   const [name, setName] = useState("")
//   const childData = (data) =>{
//     setName(data)
//   }
//   return (
//     <div>
//       <h1> hii{name}       !</h1>
//         <div>Parent Component</div>
//         <Child getdatafromchild = {childData}/>
//     </div>
//   )
// }

// export default CPParent


import React, { useState } from 'react'
import CPChild from '../ChildToParent/CPChild'

const CPParent = () => {
  const [data, setData] = useState("")
  const getChildData = (message)=>{
    setData(message)
  }
  return (
    <>
    <div>CPParent</div>
    <h1>message is: {data}</h1>
    <CPChild getChildData = {getChildData}/>
    </>
  )
}

export default CPParent