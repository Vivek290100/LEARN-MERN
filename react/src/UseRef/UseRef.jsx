// import React, { useRef, useState } from 'react'

// const UseRef = () => {
//     const ChangeColor = useRef(null)
//     const [color, setColor] = useState("red")

//     const handleColor = () =>{
//         if(ChangeColor){
//             ChangeColor.current.style.background = color
//             setColor((prev)=>prev==="red"?"yellow":"red")
//         }
//     }

//   return (
//     <>
//     <div>UseRef</div>
//     <h1 onClick={handleColor}>click</h1>
//     <h1 ref = {ChangeColor}> colorrrrrrrrr</h1>
//     </>
//   )
// }

// export default UseRef

// import React, { useRef, useState } from 'react'

// const UseRef = () => {
//   const changeColor = useRef(null)
//   const [color, setColor] = useState("red")

//   const handleClick = () =>{
//     if(changeColor){
//       changeColor.current.style.color = color
//       setColor((prev)=>prev==="red"?"yellow":"red")
//     }
//   }

//   return (
//     <>
//     <div>UseRef</div>
//     <h1 ref = {changeColor}>hello</h1>
//     <button onClick={handleClick}>click</button>
//     </>
//   )
// }

// export default UseRef


import React, { useRef } from 'react'

const UseRef = () => {
  const name = useRef(null)
  const email = useRef(null)
  const handleSubmit = (e) =>{
    e.preventDefault()
    const useNmae = name.current.value
    const useEmail = email.current.value

    console.log(useNmae);
    console.log( useEmail);
    
  }


  return (
    <>
    <div>UseRef</div>
    <form action="" onClick={handleSubmit}>
      <input type="text" placeholder='name' ref={name} />
      <input type="text" placeholder='email' ref={email} />
      <button>submit</button>
    </form>
    </>
  )
}

export default UseRef