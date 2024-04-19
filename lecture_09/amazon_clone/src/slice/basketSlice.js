import { createSlice } from '@reduxjs/toolkit'

const x = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket', // ova e unique name
  initialState: x, // inicial state go pushtame od 3ta linij, i e obiekt od niza na items.
  reducers: {
    // reducers se funkcii so dva parametri state i actions, state e vretnosta koja e zacuvana vo storot, a action e vrednosta koja ja pushtame so dispatch.
    addToBasket: (state, action) => {
      console.log('action', action.payload.rating.count)
      const numberOfItems = action.payload.rating.count
      const index = state.items.filter((basketItem) => basketItem.id === action.payload.id)
      let newBasket = [...state.items]
      console.log(state.items.find((item) => item.id === action.payload.id))

      // add to basket e akcija (funckija) koja ke ja korisitime globalno vo applikacijata (znaci mozi sekade da  ja povikame)
      state.items = [...state.items, action.payload]
      // state.items
      // action.payload e vrednosta koja ja pushtame so dispatch
      //    items = [...items, value]
    },
  },
})

export const { addToBasket } = basketSlice.actions

export default basketSlice.reducer
