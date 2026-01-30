import createSlice from "@reduxjs/toolkit"

const slice = createSlice({
    name:"counter",
    initialState:{value:0},
    reducer:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value1=1
        }
    }
})

export const {increment,decrement}= slice.action
export default slice.reducer