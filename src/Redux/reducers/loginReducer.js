import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  pass: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
	setUser: (state, action) => {
		state.email = action.payload.email;
		state.pass = action.payload.pass;
	},
  },
})

// Action creators are generated for each case reducer function
export const {setUser} = loginSlice.actions

export default loginSlice.reducer