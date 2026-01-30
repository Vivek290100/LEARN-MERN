import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'
import { setUser } from '../redux/userSlice'

const ReduxCounter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.value)
    const userName = useSelector((state)=>state.user.name)
    const handleIncrement = () =>{
        if(count<10){
            dispatch(increment())
        }
    }
    
    const handleDecrement = () =>{
        if(count>0){
            dispatch(decrement())
        }
    }

    const setName = () =>{
        dispatch(setUser("vivek"))
    }
    
  return (
    <div>
        <h1>hi</h1>
        <h1>{count}</h1>
        <h1>{userName}</h1>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={setName}>setName</button>
     
    </div>
  )
}

export default ReduxCounter