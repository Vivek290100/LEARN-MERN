import React from 'react'
import { decrement, increment } from './slice'

const redux = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.counter.value)
    dispatch(increment())
    dispatch(decrement())
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default redux