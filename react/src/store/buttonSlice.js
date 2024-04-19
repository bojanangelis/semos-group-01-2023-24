import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}
// setCounter((e) => e.value)
const counterSlice = createSlice({
  name: 'counter', // unique 
  initialState,
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      if(state.value > 0) {
        state.value -= 1
      }
    },
    incrementByAmount: (state, action) => {
      state.value = Number(action.payload)
    }
  }
})

export const { incremented, decremented, incrementByAmount } = counterSlice.actions // actions.

export default counterSlice.reducer

