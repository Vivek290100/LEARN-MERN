import React, { useRef } from 'react'

const test = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    function click(){
      const name = nameRef.current.value
      const email = emailRef.current.value

      console.log(name);
      console.log(email);
      
    }
  return (
    <div>
        <form action="" onClick={click}>
            <input type="text" placeholder='name' ref={nameRef} />
            <input type="text" placeholder='email' ref={emailRef}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default test