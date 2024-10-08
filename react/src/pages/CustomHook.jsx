import React, { useState } from 'react'

const CustomHook = () => {
    const [count, setCount] = useState(0)

    const increment = () =>setCount(count+1)
    const decrement = () =>setCount(count-1)
  return {count,increment, decrement}
}




const counterCOmponent = () =>{
    const {count,increment, decrement} = CustomHook()
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default counterCOmponent



