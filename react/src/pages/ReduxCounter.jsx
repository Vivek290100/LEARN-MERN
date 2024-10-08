import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

const ReduxCounter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.value)
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
    
  return (
    <div>
        <h1>hi</h1>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
     
    </div>
  )
}

export default ReduxCounter