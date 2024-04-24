// cekor 04 ****
import { createSlice } from '@reduxjs/toolkit'

// inicialen state tuka go kreirame globalnito state shto da ima dali ke bide niza ili obiekt
const initialState = {
  // inicial state.
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter', // unique name
  initialState, // initialState: initialState,
  reducers: {
    // ovie se funkcii  kade shto ke ja manipuliraat cel globalen counterSlice state.
    increment: (state) => {
      // (state) sekogash go povikuvame i ni ja vrajka inicijalnata data od toj globalen state
      state.value += 1 // state.value go pristapuvame vrednosta od counter slice
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      // so action parametar vrajkame se shto ke pushtime vo dispach cekor 05 vo app.jsx
      // ako sakame da pushtime parametar korisitme action.
      state.value += action.payload
    },
  },
})

// cekor 06 vaka se eksportira akcija za da mozi da ja koristime vo cekor 5.1.
export const { increment, decrement } = counterSlice.actions // ako go exportirame ova e akcija // no ako ja koristime e reducer.

export default counterSlice.reducer
