// import React, { createContext, useContext } from 'react'

// const nameContext = createContext()

// export const Context = () => {
//     const name = "vivek"
//   return (
//     <div>
//         <nameContext.Provider value = {name}>
//             {children}
//         </nameContext.Provider>
//     </div>
//   )
// }

// export const  useName = () =>{
//     return useContext(nameContext)
// }


import React, { createContext, useContext } from 'react'

const nameContext = createContext()
const name = "vivek"
export const Context = ({children}) => {
  return (
    <div>
      <nameContext.Provider value = {name}>
        {children}
      </nameContext.Provider>
    </div>
  )
}

export const useName=()=>{
  return useContext(nameContext)
}