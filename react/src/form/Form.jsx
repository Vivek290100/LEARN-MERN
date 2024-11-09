import React, { useRef } from 'react'

const Form = () => {
    const name = useRef(null)
    const email = useRef(null)
    function click(e){
        e.preventDefault()
        const nameref = name.current.value
        const emailref = email.current.value

        console.log(nameref);
        console.log(emailref);
        
    }
  return (
    <div>
        <form action="" onSubmit={click}>
            <input type="text" placeholder='name' ref={name} />
            <input type="text" placeholder='email' ref={email} />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form