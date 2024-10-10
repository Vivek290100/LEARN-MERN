import React, { forwardRef, useRef } from 'react'

const Child = forwardRef((props,ref)=>{
  return (
    <div>
      <input ref={ref} type="text" placeholder='enter anything' />
    </div>

  )
})

const ForwardRefParent = () => {
  const inputRef = useRef(null)

  const focusInput = () =>{
    if(inputRef.current){
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <Child ref={inputRef}/>
      <button onClick={focusInput}>click</button>
    </div>
  )
}

export default ForwardRefParent







//autometically focus on input when render the mcomponent
// import React, { useEffect, useRef } from 'react'

// const Test = () => {

//     const inputRef = useRef(null)

//     useEffect(()=>{
//         inputRef.current.focus()
//     },[])
//   return (
//     <div>
//         <input ref={inputRef} type="text" />
//     </div>
//   )
// }

// export default Test

