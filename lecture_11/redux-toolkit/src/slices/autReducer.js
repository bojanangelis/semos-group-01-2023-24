import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  username: null,
  email: null,
  isLoggedIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      state.id = action.payload.id
      state.username = action.payload.username
      state.email = action.payload.email
      state.isLoggedIn = true
    },
    handleLogout: (state) => {
      state.id = null
      state.username = null
      state.email = null
      state.isLoggedIn = false
    },
  },
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer
