import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inputValue: '',
}
// setCounter((e) => e.value)
const inputSlice = createSlice({
  name: 'inputValue', // unique 
  initialState,
  reducers: {
  
    onChange: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { incrementByAmount } = inputSlice.actions // actions.

export default inputSlice.reducer

